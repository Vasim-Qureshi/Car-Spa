import Order from "../models/orderModel.js";
//for RazorPay integration
import crypto from "crypto";
import { razorpayInstance } from "../config/razorpay.js";
//for Paytm integration
import PaytmChecksum from "paytmchecksum";
import { paytmConfig } from "../config/paytm.js";


// 📌 Create new order (already made before)
/*
export const createOrder = async (req, res) => {
  try {
    const { customerId, services, totalAmount, billingAddress, shippingAddress, paymentDetail } = req.body;

    if (!customerId || !services || services.length === 0) {
      return res.status(400).json({ message: "Customer & Services are required" });
    }

    if (!payment || !payment.method) {
      return res.status(400).json({ message: "Payment method is required" });
    }

    const newOrder = new Order({
      customerId,
      services,
      totalAmount,
      billingAddress,
      shippingAddress,
      paymentDetail,
    });

    const savedOrder = await newOrder.save();
    res.status(201).json({ message: "Order created successfully", order: savedOrder });
  } catch (error) {
    console.error("Order creation failed:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
}; 
*/

// 📌 Get all orders (admin access)
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      // .populate("customerId", "name email") // Customer details
      // .populate("services.serviceId", "title price"); // Service details

    res.status(200).json({ count: orders.length, orders });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// 📌 Get order by ID
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      // .populate("customerId", "name email")
      // .populate("services.serviceId", "name price");

    if (!order) return res.status(404).json({ message: "Order not found" });

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// 📌 Get orders by Customer ID
export const getOrdersByCustomer = async (req, res) => {
  try {
    const orders = await Order.find({ customerId: req.params.customerId })
      // .populate("services.serviceId", "name price");

    if (orders.length === 0)
      return res.status(404).json({ message: "No orders found for this customer" });

    res.status(200).json({ count: orders.length, orders });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// 📌 Update order payment status
export const updateOrderPaymentStatus = async (req, res) => {
  try {
    const { id } = req.params; // Order ID
    const { status } = req.body; // New payment status

    const validStatuses = ["Pending", "Completed", "Failed"];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      id,
      { "payment.status": status },
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order status updated", order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// RAZORPAY PAYMENT INTEGRATION

// 📌 Step 1: Create Razorpay Order
export const createRazorpayOrder = async (req, res) => {
  try {
    const { orderData } = req.body;

    if (!orderData.customerId || !orderData.services || orderData.services.length === 0) {
      return res.status(400).json({ message: "Customer & Services required" });
    }

    // ✅ Create Razorpay order
    const options = {
      amount: orderData.totalAmount * 100, // paise me convert
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
    };

    const razorpayOrder = await razorpayInstance.orders.create(options);

    res.status(200).json({
      success: true,
      razorpayOrder,
      key: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};

// 📌 Step 2: Verify Payment & Save Order in DB
export const verifyPayment = async (req, res) => {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      orderData
    } = req.body;

    const {
      customerId,
      services,
      totalAmount,
      billingAddress,
      shippingAddress
    } = orderData || {};

    // ✅ Verify signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(400).json({ success: false, message: "Payment verification failed" });
    }

    // ✅ Save Order in DB
    const newOrder = new Order({
      customerId,
      services,
      totalAmount,
      billingAddress,
      shippingAddress,
      paymentDetail: {
        method: "Razorpay",
        transactionId: razorpay_payment_id,
        status: "Completed",
      },
    });

    const savedOrder = await newOrder.save();

    res.status(201).json({
      success: true,
      message: "Payment verified & order placed successfully",
      order: savedOrder,
    });
  } catch (error) {
    console.error("Payment verification failed:", error);
    res.status(500).json({ message: "Internal Server Error", error: error.message });
  }
};


// PAYTM PAYMENT INTEGRATION
export const createPaytmOrder = async (req, res) => {
  const { orderData } = req.body;

  // 🔹 Common order data
  const {
    customerId,
    services,
    totalAmount,
    billingAddress,
    shippingAddress,
    paymentDetail: {
      method,
      status,
    },
  } = orderData || {};

  let paytmParams = {};
  paytmParams.body = {
    requestType: "Payment",
    mid: paytmConfig.MID,
    websiteName: paytmConfig.WEBSITE,
    orderId: "ORDER_" + new Date().getTime(),
    callbackUrl: paytmConfig.CALLBACK_URL,
    txnAmount: {
      value: amount,
      currency: "INR",
    },
    userInfo: {
      custId: customerId,
    },
  };

  try {
    const checksum = await PaytmChecksum.generateSignature(
      JSON.stringify(paytmParams.body),
      paytmConfig.KEY
    );

    paytmParams.head = {
      signature: checksum,
    };

    // Paytm transaction URL
    const url = `https://securegw-stage.paytm.in/theia/api/v1/initiateTransaction?mid=${paytmConfig.MID}&orderId=${paytmParams.body.orderId}`;

    // save in DB (transactionId = paytm order id)
    orderData.paymentDetail.transactionId = paytmParams.body.orderId;
    const newOrder = await Order.create(orderData);

    return res.json({
      success: true,
      gateway: "paytm",
      txnTokenUrl: url,
      payload: paytmParams,
      dbOrder: newOrder,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const paytmCallback = async (req, res) => {
  try {
    const { ORDERID, STATUS, TXNID } = req.body;

    // Find and update order
    const order = await Order.findOneAndUpdate(
      { "paymentDetail.transactionId": ORDERID },
      {
        $set: {
          "paymentDetail.status": STATUS === "TXN_SUCCESS" ? "Completed" : "Failed",
          "paymentDetail.transactionId": TXNID,
        },
      },
      { new: true }
    );

    res.json({ success: true, message: "Paytm callback processed", order });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};