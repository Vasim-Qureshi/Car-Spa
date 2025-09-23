

// Define the API base URL
// const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

export const getAllCustomers = () => {
  return fetch(`${URL}/api/customers`);
};

export const getCustomerById = (customerId) => {
  return fetch(`http://localhost:5000/api/customers/${customerId}`);
};

export const updateCustomerById = (customerId, customerData) => {
  return fetch(`http://localhost:5000/api/customers/${customerId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(customerData)
  });
};

export const deleteCustomerById = (customerId) => {
  return fetch(`${URL}/api/customers/${customerId}`, {
    method: 'DELETE'
  });
};
