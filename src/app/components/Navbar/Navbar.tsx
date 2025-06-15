"use client";

import React, { useState } from "react";
import { FaHome, FaCog } from "react-icons/fa";
import Link from "next/link";
import LogoutButton from "../logoutButton" // import your LogoutButton here

const Navbar: React.FC = () => {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <>
      <nav className="fixed top-20 right-5 h-[80vh] w-20 bg-transparent border-s-amber-50 shadow-lg z-50 flex flex-col items-center py-6 space-y-10">

        <Link href="/">
          <div className="flex flex-col items-center text-white hover:text-amber-400 transition cursor-pointer">
            <FaHome size={20} />
            <span className="text-xs mt-1">Home</span>
          </div>
        </Link>

        <button
          onClick={() => setShowSettings((prev) => !prev)}
          className="flex flex-col items-center text-white hover:text-amber-400 transition focus:outline-none"
          aria-label="Toggle Settings Panel"
        >
          <FaCog size={20} />
          <span className="text-xs mt-1">Settings</span>
        </button>
      </nav>

      {showSettings && (
        <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-60">
          <div className="bg-white rounded-lg shadow-lg p-6 w-80 max-w-full relative">
            <h2 className="text-xl font-bold mb-4 text-amber-700">Settings</h2>

            {/* Use the imported LogoutButton here */}
            <LogoutButton />

            <button
              onClick={() => setShowSettings(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Close Settings Panel"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
