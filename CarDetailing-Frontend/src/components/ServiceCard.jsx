// ServiceCard.jsx
import React, { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { getAllServices, getServiceById, getFilteredServices} from "../api/serviceApi.js";

const ServiceCard = ({ service, onBook }) => {
/*  const [serviceData, setServiceData] = useState({});

  useEffect(() => {
    getAllServices().then(res => res.json()).then(data => console.log(data));
    if (service) {
      setServiceData(service);
    }
  }, [service]);
*/
  if (!service) return null;

  const {
    title,
    category,
    sortDescription,
    servicePrice,
    offerPrice,
    offer,
    duration,
    images,
    starRating,
    reviews,
  } = service;

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <img
          src={images[0]}
          alt={title}
          className="h-full w-full object-cover"
        />
        {offer > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-sm font-bold px-2 py-1 rounded">
            {offer}% OFF
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Title + Category */}
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">{category}</p>
        </div>

        {/* Short Description */}
        <p className="text-sm text-gray-600 line-clamp-2">{sortDescription}</p>

        {/* Price Section */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-green-600">
            ₹{offerPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            ₹{servicePrice}
          </span>
        </div>

        {/* Duration */}
        <p className="text-sm text-gray-500">⏱ {duration}</p>

        {/* Rating & Reviews */}
        <div className="flex items-center gap-1 text-yellow-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              fill={i < starRating ? "currentColor" : "none"}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">
            ({reviews.length} reviews)
          </span>
        </div>

        {/* Book Now Button */}
        <button
          onClick={() => onBook?.(service)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
