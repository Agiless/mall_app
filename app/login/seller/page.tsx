"use client";
import { useState } from 'react';
import axios from "axios"; // Install first: npm install axios

const SellerForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [shopNumber, setShopNumber] = useState('');
  const [gstin, setGstin] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      username,
      password,
      shopNumber,
      gstin,
      email,
      mobileNumber,
    });
  };

  const clicked = () => {
    

    axios.post("http://127.0.0.1:8000/post-json/", { username : username, password : password, mobileNumber : mobileNumber, gstin : gstin, email : email, shopNumber : shopNumber})
      .then(response => console.log(response.data))
      .catch(error => console.error("Error:", error));

  }

  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{
        backgroundImage: 'url(/pexels-demiansmit-449559 (1).jpg)', // Update the path as needed
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-6">Seller Registration</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="shopNumber" className="block text-sm font-medium text-gray-700">Shop Number:</label>
            <input
              type="text"
              id="shopNumber"
              value={shopNumber}
              onChange={(e) => setShopNumber(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gstin" className="block text-sm font-medium text-gray-700">GSTIN:</label>
            <input
              type="text"
              id="gstin"
              value={gstin}
              onChange={(e) => setGstin(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-200"
            onClick = {() => clicked()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SellerForm;

