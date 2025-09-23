import React, { useEffect, useState } from "react";
import AddService from "../../components/AddService";

export default function ServiceList() {
  const [services, setServices] = useState([]);

  const handleAddService = (service) => {
    // const existingServices = JSON.parse(localStorage.getItem("services")) || [];
    // console.log(existingServices);
    // setServices((prev) => [...prev, service]);
  };

  useEffect(() => {
    const storedServices = JSON.parse(localStorage.getItem("services")) || [];
    console.log(storedServices);
    setServices((prev) => [...prev, storedServices]);
  }, []);

  return (
    <div className="p-6">
      {/* Add Service Form */}
      {/* <AddService onAdd={handleAddService} /> */}

      {/* Service List */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">Available Services</h2>
      {services.length === 0 ? (
        <p className="text-gray-500">No services added yet.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image */}
              {service.image ? (
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-96 h-48 object-cover"
                />
              ) : (
                <div className="w-full h-40 bg-gray-200 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  {service.details || "No details provided"}
                </p>

                {/* Pricing */}
                <div className="mt-2">
                  <p className="text-gray-800 font-bold">
                    ₹{service.offerPrice || service.servicePrice}
                  </p>
                  {service.offerPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      ₹{service.servicePrice}
                    </p>
                  )}
                  {service.offerPercent && (
                    <p className="text-green-600 text-sm">
                      {service.offerPercent}% OFF
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
