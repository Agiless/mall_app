"use client";
import { Link } from "@mui/material";
import { useState } from "react";

export default function Page() {
  const [lnk1,setLnk1] = useState(false);
  const [lnk2,setLnk2] = useState(false);
  return (
    <div className="h-full">

      {/* Navbar */}
      <nav className="bg-gray-800 shadow-md py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Smart Mall</div>
        <div className="space-x-6">
          <Link
            href={lnk1 ? "/login/seller" : undefined}
            onClick = {() => setLnk1(!lnk1)}
            className="!no-underline !text-gray-300 !hover:text-white"
          >
            Support
          </Link>
          <Link
            href={lnk2 ? "/login/customer" : undefined}
            onClick = {() => setLnk2(!lnk2)}
            className="!no-underline !text-white px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-500"
          >
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 bg-[url('/mall.webp')] bg-cover bg-center m-[2vw] bg-gray-800 text-white">
        <h1 className="text-4xl font-bold text-white">
          Transform Your Shopping Experience
        </h1>
        <p className="text-lg mt-4 text-gray-300">
          Smart Mall Bot provides real-time assistance, navigation, and interactive shopping features.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-20 px-10">
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">Chatbot Assistance</h2>
          <p className="text-gray-300 mt-2">
            Locate stores, find products, and get promotions in real-time.
          </p>
        </div>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">3D Mapping & Navigation</h2>
          <p className="text-gray-300 mt-2">
            Navigate efficiently with the shortest path guidance.
          </p>
        </div>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">Online Parking Assistance</h2>
          <p className="text-gray-300 mt-2">
            Find available parking spots quickly and easily.
          </p>
        </div>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">SOS Emergency Alerts</h2>
          <p className="text-gray-300 mt-2">
            Help in cases of lost items or missing children.
          </p>
        </div>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">Stock Clearance Ads</h2>
          <p className="text-gray-300 mt-2">
            Boost slow-moving stock with targeted promotions.
          </p>
        </div>
        <div className=" shadow-md p-6 text-center rounded-lg bg-gray-700 text-white">
          <h2 className="text-2xl font-semibold">Engagement Rewards</h2>
          <p className="text-gray-300 mt-2">
            Earn tokens for shopping and interactions.
          </p>
        </div>
      </section>

    </div>
  );
}

