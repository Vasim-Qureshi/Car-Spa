
// Define the API base URL
// const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

export const getAllUsers = () => {
  return fetch(`${URL}/api/admin/users`);
};

export const getUserById = (userId) => {
  return fetch(`${URL}/api/admin/users/${userId}`);
};

export const updateUserById = (userId, userData) => {
  return fetch(`${URL}/api/admin/users/${userId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
};

export const deleteUserById = (userId) => {
  return fetch(`${URL}/api/admin/users/${userId}`, {
    method: 'DELETE'
  });
};
