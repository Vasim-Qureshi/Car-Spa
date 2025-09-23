import React, { useState } from "react";

export default function AddService({ onAdd }) {
    const [formData, setFormData] = useState({
        title: "",
        image: "",
        details: "",
        servicePrice: "",
        offerPrice: "",
        offerPercent: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Auto-calc offer percentage if offerPrice is entered
        if (name === "offerPrice" && formData.servicePrice) {
            const percent = (
                ((formData.servicePrice - value) / formData.servicePrice) *
                100
            ).toFixed(2);
            setFormData((prev) => ({
                ...prev,
                [name]: value,
                offerPercent: percent,
            }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(formData); // send new service back to parent
        console.log("Service Data:", formData);
        localStorage.setItem("services", JSON.stringify(formData));
        alert("Service Added Successfully ✅");
        setFormData({
            title: "",
            image: "",
            details: "",
            servicePrice: "",
            offerPrice: "",
            offerPercent: "",
        });
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">Add New Service</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-gray-700 mb-1">Service Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Enter service title"
                        required
                    />
                </div>

                {/* Image URL */}
                <div>
                    <label className="block text-gray-700 mb-1">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="https://example.com/image.jpg"
                    />
                </div>

                {/* Details */}
                <div>
                    <label className="block text-gray-700 mb-1">Features / Details</label>
                    <textarea
                        name="details"
                        value={formData.details}
                        onChange={handleChange}
                        rows="3"
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Enter details about the service"
                    ></textarea>
                </div>

                {/* Service Price */}
                <div>
                    <label className="block text-gray-700 mb-1">Service Price (₹)</label>
                    <input
                        type="number"
                        name="servicePrice"
                        value={formData.servicePrice}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Eg: 1999"
                        required
                    />
                </div>

                {/* Offer Price */}
                <div>
                    <label className="block text-gray-700 mb-1">Offer Price (₹)</label>
                    <input
                        type="number"
                        name="offerPrice"
                        value={formData.offerPrice}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2"
                        placeholder="Eg: 1499"
                    />
                </div>

                {/* Offer Percentage */}
                <div>
                    <label className="block text-gray-700 mb-1">Offer (%)</label>
                    <input
                        type="text"
                        name="offerPercent"
                        value={formData.offerPercent}
                        onChange={handleChange}
                        className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                        placeholder="Auto-calculated"
                        readOnly
                    />
                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Add Service
                </button>
            </form>
        </div>
    );
}
