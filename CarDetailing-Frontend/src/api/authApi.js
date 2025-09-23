// src/services/authService.ts

// Define the API base URL
// const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

export const signupCustomer = (formData) => {
  return fetch("http://localhost:5000/api/auth/signup/customer", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};

export const login = (formData) => {
  return fetch(`${URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
};

export const sendOtp = (data) => {
  return fetch(`${URL}/api/auth/forgot-password`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export const verifyOtp = (data) => {
  return fetch(`${URL}/api/auth/verify-otp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
};

export const logout = (userId) => {
  return fetch(`${URL}/api/auth/logout`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId })
  });
};

