// src/pages/OrderPage.jsx
import React, { useState } from "react";
import { createRazorPayOrder, createPaytmOrder } from "../api/orderApi"; // Ensure this path is correct

const OrderPage = () => {
  const [orderData, setOrderData] = useState({
    customerId: "",
    services: [{ serviceId: "", quantity: 1 }],
    totalAmount: 0,

    billingAddress: {
      name: "",
      phone: "",
      email: "",
      fullAddress: "",
      landmark: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },

    shippingAddress: {
      name: "",
      phone: "",
      email: "",
      fullAddress: "",
      landmark: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    },

    paymentDetail: {
      method: "COD",
    },
  });

  // ✅ Handle input changes
  const handleChange = (section, field, value, index = null) => {
    if (section === "services") {
      const updatedServices = [...orderData.services];
      updatedServices[index][field] = value;
      setOrderData(prev => ({ ...prev, services: updatedServices }));
    } else if (section === "paymentDetail") {
      setOrderData(prev => ({
        ...prev,
        paymentDetail: { ...prev.paymentDetail, [field]: value },
      }));
    } else {
      setOrderData(prev => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    }
  };

  // ✅ Submit order
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(orderData);
    if (orderData.paymentDetail.method === "Razorpay") {
      createRazorPayOrder(orderData);
    }
    else if (orderData.paymentDetail.method === "Paytm") {
      createPaytmOrder(orderData);
    }
    else if (orderData.paymentDetail.method === "PayPal") {
      console.log(orderData);
    }
    else if (orderData.paymentDetail.method === "COD") {
      console.log(orderData);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Create New Order</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Customer ID */}
        <div>
          <label className="block text-sm font-medium">Customer ID</label>
          <input
            type="text"
            value={orderData.customerId}
            onChange={(e) => setOrderData({ ...orderData, customerId: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold">Services</h3>
          {orderData.services.map((service, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                placeholder="Service ID"
                value={service.serviceId}
                onChange={(e) => handleChange("services", "serviceId", e.target.value, index)}
                className="w-2/3 p-2 border rounded-md"
                required
              />
              <input
                type="number"
                min="1"
                value={service.quantity}
                onChange={(e) => handleChange("services", "quantity", e.target.value, index)}
                className="w-1/3 p-2 border rounded-md"
                required
              />
            </div>
          ))}
        </div>

        {/* Total Amount */}
        <div>
          <label className="block text-sm font-medium">Total Amount</label>
          <input
            type="number"
            min="0"
            value={orderData.totalAmount}
            onChange={(e) => setOrderData({ ...orderData, totalAmount: e.target.value })}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* Billing Address */}
        <div>
          <h3 className="font-semibold">Billing Address</h3>
          {Object.keys(orderData.billingAddress).map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field}
              value={orderData.billingAddress[field]}
              onChange={(e) => handleChange("billingAddress", field, e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
              required
            />
          ))}
        </div>

        {/* Shipping Address */}
        <div>
          <h3 className="font-semibold">Shipping Address</h3>
          {Object.keys(orderData.shippingAddress).map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field}
              value={orderData.shippingAddress[field]}
              onChange={(e) => handleChange("shippingAddress", field, e.target.value)}
              className="w-full p-2 border rounded-md mb-2"
              required
            />
          ))}
        </div>

        {/* Payment Details */}
        <div>
          <h3 className="font-semibold">Payment Method</h3>
          <select
            value={orderData.paymentDetail.method}
            onChange={(e) => handleChange("paymentDetail", "method", e.target.value)}
            className="w-full p-2 border rounded-md mb-2"
          >
            <option value="COD">Cash on Delivery</option>
            <option value="PayPal">PayPal</option>
            <option value="Razorpay">Razorpay</option>
            <option value="Paytm">Paytm</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default OrderPage;
