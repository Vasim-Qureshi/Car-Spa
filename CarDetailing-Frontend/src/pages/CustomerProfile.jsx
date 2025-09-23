// ProfileUpdateForm.jsx
import React, { useState, useEffect, use } from "react";
import { getCustomerById, updateCustomerById } from "../api/customerApi";
import { useParams } from "react-router-dom";

const ProfileUpdateForm = () => {
  const { customerId } = useParams();
  console.log("Customer ID from URL:", customerId);
  // const customerId = "68bbcf0393d45f0140cac100"; // Replace with actual customer ID logic
  

  const [customer, setCustomer] = useState({
    fullname: "",
    phone: "",
    address: "",
    email: "",
    profilePicture: "",
    password: "",
    confirmPassword: ""
  });

  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCustomer = async (customerId) => {
      const data = await getCustomerById(customerId);
      const customerData = await data.json();
      setCustomer(customerData);
    };
    fetchCustomer(customerId);
  }, [customerId]);
  
  // 🔹 Validation function
  const validate = () => {
    let newErrors = {};

    if (!customer.fullname.trim()) newErrors.fullname = "Full Name is required.";
    if (!/^\d{10}$/.test(customer.phone)) newErrors.phone = "Phone must be 10 digits.";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(customer.email))
      newErrors.email = "Invalid email address.";
    if (customer.password && customer.password.length < 10)
      newErrors.password = "Password must be at least 10 characters.";
    if (customer.password !== customer.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Update API call
  const handleUpdate = async () => {
    if (!validate()) return;
    try {
      const data = await updateCustomerById(customerId, customer);
      // console.log("Profile updated successfully:", data);
      setCustomer((prev) => ({ ...prev, ...data }));
      setIsEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-6">
      <div className="flex flex-col items-center">
        <img
          src={customer.profilePicture || "https://lindamood.net/wp-content/uploads/2019/09/Blank-profile-image.jpg"}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border"
        />
        <h2 className="text-xl font-bold mt-4">{customer.fullname || "Guest"}</h2>
        <p className="text-gray-500">{customer.email}</p>
      </div>

      <div className="mt-6 space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-700 font-medium">FullName</label>

          <input
            type="text"
            name="fullname"
            value={customer.fullname}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-gray-700 font-medium">Phone</label>
          <input
            type="text"
            name="phone"
            value={customer.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700 font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={customer.address}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={customer.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border rounded-lg p-2 mt-1 bg-gray-100"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        {/* Profile Picture */}
        <div>
          <label className="block text-gray-700 font-medium">Profile Picture URL</label>
          <input
            type="text"
            name="profilePicture"
            value={customer.profilePicture}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border rounded-lg p-2 mt-1"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-gray-700 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={customer.password}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-gray-700 font-medium">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={customer.confirmPassword}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border rounded-lg p-2 mt-1"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={handleUpdate}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Update Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default ProfileUpdateForm;
