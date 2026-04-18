"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
  const phoneNumber = "966542677664"; // Aapka number
  
  const handleClick = () => {
    const message = encodeURIComponent("Hello Makinati CNC! I have an inquiry.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] group">
      {/* Tooltip (Jo hover par dikhega) */}
      <span className="absolute right-16 bottom-2 bg-white text-gray-800 text-xs font-bold px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
        Chat with us on WhatsApp
      </span>

      {/* The Floating Button */}
      <button
        onClick={handleClick}
        className="bg-[#058f37] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center relative border-4 border-white md:border-none"
        aria-label="WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-[#25D366]" />
        
        {/* Chota sa Notification Dot (Optional) */}
        <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
      </button>
    </div>
  );
};

export default FloatingWhatsApp;