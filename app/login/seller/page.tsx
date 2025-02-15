
"use client";
import { useState } from "react";
import axios from "axios"; // Install first: npm install axios

const SellerForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shopNumber, setShopNumber] = useState("");
  const [gstin, setGstin] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password, shopNumber, gstin, email, mobileNumber });
  };

  const clicked = () => {
    axios
      .post("http://127.0.0.1:8000/post-json/", { name: "John" })
      .then((response) => console.log(response.data))
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-2xl w-full max-w-md text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 rounded-lg"
          style={{ backgroundImage: "url(/pexels-demiansmit-449559.jpg)" }}
        ></div>
        <h1 className="text-2xl font-semibold text-center mb-6 relative z-10">Seller Registration</h1>
        <form onSubmit={handleSubmit} className="relative z-10">
          {[
            { label: "Username", id: "username", value: username, setter: setUsername, type: "text" },
            { label: "Password", id: "password", value: password, setter: setPassword, type: "password" },
            { label: "Shop Number", id: "shopNumber", value: shopNumber, setter: setShopNumber, type: "text" },
            { label: "GSTIN", id: "gstin", value: gstin, setter: setGstin, type: "text" },
            { label: "Email", id: "email", value: email, setter: setEmail, type: "email" },
            { label: "Mobile Number", id: "mobileNumber", value: mobileNumber, setter: setMobileNumber, type: "tel" },
          ].map(({ label, id, value, setter, type }) => (
            <div key={id} className="mb-4">
              <label htmlFor={id} className="block text-sm font-medium text-gray-300">
                {label}:
              </label>
              <input
                type={type}
                id={id}
                value={value}
                onChange={(e) => setter(e.target.value)}
                required
                className="mt-1 block w-full p-2 border border-gray-600 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-orange-500"
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-500 transition duration-200"
            onClick={clicked}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerForm;
