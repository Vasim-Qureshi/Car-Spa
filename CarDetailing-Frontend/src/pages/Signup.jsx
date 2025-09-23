import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupCustomer } from "../api/authApi";

export default function Signup() {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  // Generate random OTP and store in localStorage
  const handleSendOtp = (e) => {
    e.preventDefault();
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }
    if (email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      alert("Please enter a valid email address");
      return;
    }
    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(newOtp);
    localStorage.setItem("temp_otp", newOtp);
    setStep(2);
    alert(`Your OTP is ${newOtp} (for testing purpose)`);
  };

  // Verify OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();
    const savedOtp = localStorage.getItem("temp_otp");
    if (otp === savedOtp) {
      localStorage.removeItem("temp_otp");
      alert("Signup successful ✅");
      signupCustomer({ phone: mobile, email: email })
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.authToken) {
            localStorage.setItem("authToken", data.authToken);
            navigate("/");
          } else {
            alert("Signup failed ❌");
          }
        });
    } else {
      alert("Invalid OTP ❌");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 p-4">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8 transition-all">
        {/* Header */}
        <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
          Signup with OTP
        </h2>

        {step === 1 && (
          <form onSubmit={handleSendOtp} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="text"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter your mobile"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 rounded-lg hover:opacity-90 shadow-lg transition-all"
            >
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleVerifyOtp} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Enter OTP
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 tracking-widest text-center"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-2.5 rounded-lg hover:opacity-90 shadow-lg transition-all"
            >
              Verify OTP
            </button>
            <button
              type="button"
              onClick={() => setStep(1)}
              className="w-full mt-2 bg-gray-400 text-white py-2.5 rounded-lg hover:bg-gray-500 transition-all"
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
