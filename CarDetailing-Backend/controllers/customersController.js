import Customer from "../models/customerModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import e from "express";
import { verify } from "crypto";

dotenv.config();

// Register a new customer
export const registerCustomer = async (req, res) => {
    try {
        const { phone, email } = req.body;

        // Hash the password
        // const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new customer
        const newCustomer = new Customer({
            fullname: "John Doe", // Placeholder name
            email: email, // Placeholder email
            password: "hashedPassword", // Placeholder password
            phone: phone,
            address: "123 Main St, City, Country",
            profilePicture: "profilePicture",
        });

        // Save the customer to the database
        await newCustomer.save();
        // create a jwt token and send it to the client
        const authToken = jwt.sign({ id: newCustomer._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
        // console.log("New Customer ID:", newCustomer._id, "authToken:", authToken);

        res.status(201).json({ message: "Customer registered successfully!", success: true, authToken: authToken });

    } catch (error) {
        // console.error("Error registering customer:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

//Login customer
export const loginCustomer = async (req, res) => {
    try {
        const { email } = req.body;
        // Find the customer by email
        const customer = await Customer.findOne({ email });
        if (!customer) {
            return res.status(404).json({ message: "Customer not found", success: false });
        }

        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        console.log("OTP for customer login:", otp);
        const sendOtpToEmail = (email, otp) => {
            // Implement email sending logic here using nodemailer or any other email service
            console.log(`Sending OTP ${otp} to email: ${email}`);
            // with nodemailer you can send the email
            // transporter.sendMail({
            //     from: 'your-email@example.com',
            //     to: email,
            //     subject: 'Your OTP Code',
            //     text: `Your OTP code is ${otp}`
            // });
        };
        sendOtpToEmail(email, otp);
        res.status(200).json({ message: "OTP sent to email", success: true });
    } catch (error) {
        // console.error("Error logging in customer:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};


export const verifyOtp = (email, otp) => {
    try {
        // Implement OTP verification logic here
        const isValidOtp = (email, otp) => {
            
            // Check if the OTP is valid for the given email
            // You can store the OTP in a database or in-memory store with an expiration time
            return true; // Placeholder implementation
        };

        if (!isValidOtp(email, otp)) {
            return res.status(400).json({ message: "Invalid OTP", success: false });
        }

    // If OTP is valid, generate and return a JWT token
    const authToken = jwt.sign({ email: email }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.status(200).json({ message: "OTP verified successfully!", success: true, authToken: authToken });
    } catch (error) {
        // console.error("Error verifying OTP:", error);
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

// Update customer details by ID
export const updateCustomerById = async (req, res) => {
    try {
        const customerId = req.params.id;
        const { fullname, email, phone, address, profilePicture, password } = req.body;

        // Find the customer by ID
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }

        // Update customer details
        customer.fullname = fullname;
        customer.email = email;
        customer.phone = phone;
        customer.address = address;
        customer.profilePicture = profilePicture;

        // If password is provided, hash it
        if (password) {
            customer.password = await bcrypt.hash(password, 10);
        }

        // Save the updated customer
        await customer.save();

        res.status(200).json({ message: "Customer updated successfully!" });
    } catch (error) {
        // console.error("Error updating customer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get customer details by ID
export const getCustomerById = async (req, res) => {
    try {
        const customerId = req.params.id;
        const customer = await Customer.findById(customerId);
        if (!customer) {
            return res.status(404).json({ message: "Customer not found" });
        }
        res.status(200).json(customer);
    } catch (error) {
        // console.error("Error fetching customer:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};