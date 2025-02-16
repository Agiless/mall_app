"use client";
import { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [gstin, setGstin] = useState(""); // GSTIN state
  const [mobileNumber, setMobileNumber] = useState(""); // Mobile Number state
  const [otp, setOtp] = useState("1234"); // Default OTP

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username, password, gstin, mobileNumber, otp });

    // Make the Axios POST request
    axios
      .post("http://127.0.0.1:8000/login/", { username, password, gstin, mobileNumber, otp })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-700">
        <h1 className="text-2xl font-semibold text-center text-white mb-6">Seller Login</h1>
        <form onSubmit={handleSubmit}>
          {[
            { label: "Username", value: username, setter: setUsername, type: "text" },
            { label: "Password", value: password, setter: setPassword, type: "password" },
            { label: "GSTIN", value: gstin, setter: setGstin, type: "text" }, // GSTIN field
            { label: "Mobile Number", value: mobileNumber, setter: setMobileNumber, type: "tel" }, // Mobile Number field
            { label: "OTP", value: otp, setter: setOtp, type: "text" }, // OTP field
          ].map((field, index) => (
            <div key={index} className="mb-4">
              <label className="block text-sm font-medium text-gray-400">{field.label}:</label>
              <input
                type={field.type}
                value={field.value}
                onChange={(e) => field.setter(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-orange-500 shadow-md transition duration-200"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-500 transition duration-200 shadow-lg"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;