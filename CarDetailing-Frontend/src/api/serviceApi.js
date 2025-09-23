// src/services/bookService.ts

// const URL = import.meta.env.VITE_BASE_URL || 'http://localhost:5000';

const token = () => localStorage.getItem('token');

// ===========================================================================================================================
// Fetch services by category
export const addService = (service) => {
  return fetch(`${URL}/api/services`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`
    },
    body: JSON.stringify(service)
  });
};

// ============================================================================================================================
// Add Bulk Services
export const AddBulkServices = (services) => {
  console.log('Bulk adding services:', services);
  return fetch(`${URL}/api/services/bulk`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`
    },
    body: JSON.stringify(services) // Changed from { books } to books
  });
};

//=======================================================================================================================

// Fetch all services
export const getAllServices = () => {
  return fetch(`${URL}/api/services`);
};

//===========================================================================================================================

// Uncomment the following if you want to use category filtering without search
// export const getServices = async (category?: string) => {
//   const subUrl = category ? `category=${category}` : `/URL/services`;
// return fetch(`${URL}?${subUrl}`);
// };

// =========================================================================================================================
// Fetch services with optional category and search parameters
export const getFilteredServices = async (category, search) => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (search) params.append('search', search);

  return fetch(`${URL}/api/services/filter?${params.toString()}`);
};

// ============================================================================================================================
// Fetch a single service by ID
export const getServiceById = (id) => {
  return fetch(`${URL}/api/services/${id}`);
};


// ============================================================================================================================
// Update a service by ID
export const updateServiceById = (service, id) => {
  return fetch(`${URL}/api/services/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token()}`
    },
    body: JSON.stringify(service)
  });
};

// ============================================================================================================================
// Delete a service by ID
export const deleteServiceById = (id) => {
  return fetch(`${URL}/api/services/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token()}`
    }
  });
};

// ============================================================================================================================