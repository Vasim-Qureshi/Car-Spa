import React, { useState } from "react";
import {
  LayoutDashboard,
  Wrench,
  ShoppingBag,
  Users,
  CreditCard,
  MessageSquare,
  BarChart2,
  Menu,
  X,
} from "lucide-react";
import AddService from "../../components/AddService";
import ServiceList from "./ServiceList";
import CustomersData from "./CustomerData";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [active, setActive] = useState("Dashboard");

  const menus = [
    { name: "Dashboard", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Services", icon: <Wrench className="w-5 h-5" /> },
    { name: "Orders", icon: <ShoppingBag className="w-5 h-5" /> },
    { name: "Customers", icon: <Users className="w-5 h-5" /> },
    { name: "Payments", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Feedbacks", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Analytics", icon: <BarChart2 className="w-5 h-5" /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-16"
        } bg-white shadow-md transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={`${isOpen ? "block" : "hidden"} font-bold text-lg`}>Admin</h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <nav className="flex-1 px-2 py-4 space-y-2">
          {menus.map((item) => (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center w-full px-3 py-2 rounded-lg transition-colors
                ${
                  active === item.name
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              {item.icon}
              <span className={`${isOpen ? "ml-3" : "hidden"}`}>{item.name}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-2xl font-semibold mb-4">{active}</h2>
        <div className="bg-white rounded-lg shadow p-6 min-h-[70vh]">
          {/* Dynamic content placeholder */}
          <p className="text-gray-600">This is the {active} page content.</p>
          {active === "Services" && <ServiceList /> && <AddService />}
          {active === "Customers" && <CustomersData />}
        </div>
      </div>
    </div>
  );
}
