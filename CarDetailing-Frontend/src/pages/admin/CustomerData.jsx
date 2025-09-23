import React, { useEffect, useState } from "react";

export default function CustomersData() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Fetch customers from localStorage
    const storedData = JSON.parse(localStorage.getItem("user_profile")) || [];
    setCustomers((prev) => [...prev, storedData]);
  }, []);

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Customers Data
        </h2>

        {customers.length === 0 ? (
          <p className="text-gray-500 text-center">No Customers Found ❌</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  <th className="px-4 py-3 text-left">#</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Mobile</th>
                  {/* <th className="px-4 py-3 text-left">Signup Date</th> */}
                </tr>
              </thead>
              <tbody>
                {customers.map((cust, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    } hover:bg-indigo-50 transition`}
                  >
                    <td className="px-4 py-3">{index + 1}</td>
                    <td className="px-4 py-3">{cust.name || "N/A"}</td>
                    <td className="px-4 py-3">{cust.email || "N/A"}</td>
                    <td className="px-4 py-3">{cust.mobile}</td>
                    {/* <td className="px-4 py-3"> */}
                      {/* {cust.signupDate */}
                        {/*  ? new Date(cust.signupDate).toLocaleDateString() */}
                        {/*  : "N/A"} */}
                    {/* </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
