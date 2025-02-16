"use client";
import { useState, useEffect } from "react";

export default function Login() {
    const ads = [
      "🏬 Apple Store - 📱 iPhones at 40% OFF – Grab the best deals now!",
      "🏬 Zara - 👗 Trendy Dresses – Buy 2, Get 1 Free!",
      "🏬 IKEA - 🛋️ Furniture Sale – Flat 35% OFF on Sofas & Beds!",
      "🏬 Rolex - ⌚ Luxury Watches – Up to 50% OFF! Limited Time Only!",
      "🏬 Decathlon - 🏋️ Sports Gear – Special Clearance Sale!",
      "🏬 Bose - 🎧 Headphones & Speakers – Flat 45% OFF!",
      "🏬 Ray-Ban - 🕶️ Branded Sunglasses – Buy 1, Get 1 at 50% OFF!",
      "🏬 Louis Vuitton - 👜 Designer Bags – Flat 30% OFF This Weekend!",
      "🏬 Tupperware - 🍽️ Kitchen Essentials – Mega Discount Bonanza!",
      "🏬 PlayStation Store - 🎮 Gaming Zone – Up to 60% OFF on Consoles & Accessories!",
      "🏬 Samsung - 📱 Galaxy Phones – Exchange Offer Available!",
      "🏬 Adidas - 👟 Sports Shoes – Flat 50% OFF This Week!",
      "🏬 Nike - 🏃 Performance Wear – Buy 2, Get 20% OFF!",
      "🏬 Levi's - 👖 Denim Collection – Special Seasonal Discount!",
      "🏬 Sephora - 💄 Beauty & Skincare – Buy 1, Get 1 Free!",
      "🏬 Puma - 🎽 Activewear – Limited Edition Releases Available!",
      "🏬 Gucci - 👜 Luxury Fashion – Flat 25% OFF on Select Items!",
      "🏬 Croma - 💻 Laptops & Gadgets – Festive Offers Inside!",
      "🏬 Starbucks - ☕ Buy One, Get One Free on Frappuccinos!",
      "🏬 Hamleys - 🧸 Toy Wonderland – Huge Discounts for Kids!"
    ];


  const [currentAd, setCurrentAd] = useState(0);
  const [showAd, setShowAd] = useState(true);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % ads.length);
      setShowAd(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sendOtp = () => {
    setOtpSent(true);
    alert("OTP sent to your mobile number!");
  };

  const verifyOtp = () => {
    if (otp === "123456") {
      alert("OTP Verified!");
    } else {
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "linear-gradient(to right, #141e30, #243b55)",
      textAlign: "center",
      position: "relative",
      padding: "20px"
    }}>
      {showAd && (
        <div style={{
          position: "absolute",
          top: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "linear-gradient(to right, #ff4f5a, #ff758c)",
          color: "white",
          padding: "15px 25px",
          fontSize: "18px",
          fontWeight: "bold",
          borderRadius: "10px",
          boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.4)",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          maxWidth: "450px"
        }}>
          <p>{ads[currentAd]}</p>
          <button style={{
            background: "rgba(0, 0, 0, 0.2)",
            border: "none",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            padding: "6px 10px",
            borderRadius: "50%",
            transition: "background 0.3s ease"
          }} onClick={() => setShowAd(false)}>✖</button>
        </div>
      )}

      <div style={{
        background: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(10px)",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.4)",
        textAlign: "center",
        width: "400px",
        position: "relative",
        zIndex: 10
      }}>
        <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "white", marginBottom: "15px" }}>🔑 Customer Login</h2>
        <input type="text" placeholder="👤 Enter Name" style={{ width: "100%", padding: "12px", margin: "8px 0", border: "2px solid rgba(255, 255, 255, 0.5)", borderRadius: "6px", fontSize: "16px", background: "rgba(255, 255, 255, 0.2)", color: "white" }} />
        <input type="tel" placeholder="📞 Mobile Number" style={{ width: "100%", padding: "12px", margin: "8px 0",border: "2px solid rgba(255, 255, 255, 0.5)", borderRadius: "6px", fontSize: "16px", background: "rgba(255, 255, 255, 0.2)", color: "white" }} />
        <input type="email" placeholder="📧 Email" style={{ width: "100%", padding: "12px", margin: "8px 0" ,border: "2px solid rgba(255, 255, 255, 0.5)", borderRadius: "6px", fontSize: "16px", background: "rgba(255, 255, 255, 0.2)", color: "white"}} />
        <input type="password" placeholder="🔒 Password" style={{ width: "100%", padding: "12px", margin: "8px 0",border: "2px solid rgba(255, 255, 255, 0.5)", borderRadius: "6px", fontSize: "16px", background: "rgba(255, 255, 255, 0.2)", color: "white" }} />

        <div style={{ display: "flex", gap: "8px", width: "100%", justifyContent: "space-between" }}>
          <input type="text" placeholder="🔢 Enter OTP" style={{ flex: "2", width: "100%", padding: "12px", margin: "8px 0",border: "2px solid rgba(255, 255, 255, 0.5)", borderRadius: "6px", fontSize: "16px", background: "rgba(255, 255, 255, 0.2)", color: "white" }} value={otp} onChange={(e) => setOtp(e.target.value)} disabled={!otpSent} />
          {!otpSent ? (
            <button style={{ flex: "1", background: "#ff4f5a", color: "white", padding: "10px", borderRadius: "6px", fontSize: "14px", cursor: "pointer" }} onClick={sendOtp}>📩 Send OTP</button>
          ) : (
            <button style={{ flex: "1", background: "#ff4f5a", color: "white", padding: "10px", borderRadius: "6px", fontSize: "14px", cursor: "pointer" }} onClick={verifyOtp}>✅ Verify</button>
          )}
        </div>

        <button style={{ background: "#007bff", color: "white", padding: "14px 25px", borderRadius: "8px", fontSize: "20px", fontWeight: "bold", width: "100%", marginTop: "10px" }}>🚀 Login</button>
      </div>
    </div>
  );
}