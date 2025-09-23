// src/services/cartService.ts

// const URL = "http://localhost:5000";

// const URL = import.meta.env.VITE_BASE_URL ;
const token = localStorage.getItem('token');

export const addToCart = async (
    serviceId,
    quantity,
    customerId, // Assuming you need userId for the backend
) => {
    await fetch("http://localhost:5000/api/cart/add", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ customerId, serviceId, quantity }),
    });
};

export const getCartItemById = async (itemId) =>
    await fetch(`${URL}/api/cart/${itemId}`, {
        headers: { Authorization: `Bearer ${token}` },
    });

export const updateCartQuantityById = async (itemId, delta) =>
    await fetch(`${URL}/api/cart/${itemId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ delta }),
    });


export const removeCartItemById = async (itemId) =>
    await fetch(`${URL}/api/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

export const getCartItems = async () =>
    await fetch(`${URL}/api/cart`, {
        headers: { Authorization: `Bearer ${token}` },
    });

export const removeCart = async () =>
    await fetch(`${URL}/api/cart`, {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
