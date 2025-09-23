// src/services/orderService.ts

// Define the base URL
// const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const token = localStorage.getItem('token');

// Create a RazorPay order
export const createRazorPayOrder = async (orderData) => {
  const res = await fetch("http://localhost:5000/api/orders/razorpay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ orderData }),
  });

  const data = await res.json();
  console.log(orderData);

  console.log(data);

  const options = {
    key: data.key,
    amount: data.razorpayOrder.amount,
    currency: "INR",
    order_id: data.razorpayOrder.id,
    handler: async function (response) {
      // Verify payment
      await fetch("http://localhost:5000/api/orders/razorpay/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...response, orderData
        }),
      });
    },
    theme: { color: "#3399cc" },
  };

  const rzp1 = new window.Razorpay(options);
  rzp1.open();
};

// Create a Paytm order
export const createPaytmOrder = async () => {
  const res = await fetch("http://localhost:5000/api/orders/paytm", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ customerId: "CUST001", amount: "500" }),
  });

  const data = await res.json();

  const form = document.createElement("form");
  form.method = "post";
  form.action = data.txnTokenUrl;

  Object.entries(data.payload).forEach(([key, value]) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = typeof value === "object" ? JSON.stringify(value) : value;
    form.appendChild(input);
  });

  document.body.appendChild(form);
  form.submit();
};

// create a normal order
/*
export const placeOrder = async (cartItems, total, address, card) =>
  await fetch(`${URL}/api/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ cartItems, total, address, card }),
  });
*/
export const allOrders = async () =>
  await fetch(`${URL}/api/orders`, {
    // headers: { Authorization: `Bearer ${token}` },
  });

export const getOrderById = async (orderId) =>
  await fetch(`${URL}/api/orders/${orderId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const getOrdersByCustomer = async (customerId) =>
  await fetch(`${URL}/api/orders/customer/${customerId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

export const updateOrder = async (orderId, status) =>
  await fetch(`${URL}/api/orders/${orderId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ status }),
  });

export const deleteOrder = async (orderId) =>
  await fetch(`${URL}/api/orders/${orderId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
