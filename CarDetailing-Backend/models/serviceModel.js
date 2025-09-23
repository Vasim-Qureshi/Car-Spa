import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({
    title: {
        type: String, required: true,
    },
    category: {
        type: String, required: true,
    },
    sortDescription: {
        type: String, required: true,
    },
    longDescription: {
        type: String, required: true,
    },
    servicePrice: {
        type: Number, required: true,
    },
    offerPrice: {
        type: Number, required: true,
    },
    offer: {
        type: Number, required: true,
    },
    duration: {
        type: String, required: true,
    },
    images: {
        type: [String], required: true,
    },
    starRating: {
        type: Number, required: true,
        min: 1,
        max: 5,
    },
    reviews: {
        type: [String], required: true,
    },
    FAQs: {
        type: [String], required: true,
    },
    createdAt: {
        type: Date, default: Date.now,
    },
    updatedAt: {
        type: Date, default: Date.now,
    },
});

const Service = mongoose.model("Service", serviceSchema);

export default Service;
