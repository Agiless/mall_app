"use client";
import { useState } from "react";

export default function EmergencySupportForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    visitedAreas: "",
    approxTime: "",
    orderIssue: "",
    message: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    alert("🚨 Your emergency request has been submitted!");
    console.log("Form Data:", formData);
  }

  
  const urgencyColor = {
    delayed: "border-yellow-500",
    "wrong-item": "border-blue-500",
    missing: "border-red-500",
    "payment-failure": "border-yellow-600",
    "app-crash": "border-red-700",
    fraud: "border-red-900 animate-pulse",
    other: "border-gray-500",
  }[formData.orderIssue] || "border-gray-500";

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-600 p-6">
      <div className={`w-full max-w-lg bg-gray-900 p-8 rounded-xl shadow-2xl border-4 ${urgencyColor}`}>
        
 
        <div className="text-center text-red-600 text-4xl animate-pulse mb-2">
          🚨 Emergency Alert 🚨
        </div>

    
        <h2 className="text-3xl font-bold text-red-500 text-center mb-6">
          🚨 Urgent Support Needed 🚨
        </h2>
        <p className="text-gray-300 text-center mb-4 font-semibold">
          Facing an issue? Submit your request immediately.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            required
            className="w-full p-3 bg-gray-700 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            required
            className="w-full p-3 bg-gray-700 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Visited Areas"
            value={formData.visitedAreas}
            onChange={(e) => updateField("visitedAreas", e.target.value)}
            required
            className="w-full p-3 bg-gray-700 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
          />
          <input
            type="text"
            placeholder="Approximate Time of Issue"
            value={formData.approxTime}
            onChange={(e) => updateField("approxTime", e.target.value)}
            required
            className="w-full p-3 bg-gray-700 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
          />

          <select
            value={formData.orderIssue}
            onChange={(e) => updateField("orderIssue", e.target.value)}
            required
            className="w-full p-3 bg-gray-700 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 text-white"
          >
            <option value="delayed">Order Delayed</option>
            <option value="wrong-item">Wrong Item Received</option>
            <option value="missing">Item Missing</option>
            <option value="payment-failure">Payment Failure</option>
            <option value="app-crash">App Not Working</option>
            <option value="fraud">Fraudulent Activity</option>
            <option value="other">Other</option>
          </select>

          <textarea
            placeholder="Describe your issue"
            value={formData.message}
            onChange={(e) => updateField("message", e.target.value)}
            required
            className="w-full p-3 bg-gray-700 border border-red-500 rounded-lg focus:ring-2 focus:ring-red-500 text-white placeholder-gray-400"
          ></textarea>

          <button
            type="submit"
            className="w-full p-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-500"
          >
            🚨 Submit Emergency Request 🚨
          </button>
        </form>

      </div>
    </div>
  );
}

