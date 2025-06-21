"use client";

import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-green-800 to-green-900 text-white px-6 py-8 shadow-inner">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6 items-center">
        <div className="flex flex-wrap gap-4 text-sm tracking-wide">
          <a href="#" className="hover:text-green-300 transition">HOME</a>
          <a href="#" className="hover:text-green-300 transition">PRIVACY</a>
          <a href="#" className="hover:text-green-300 transition">TERMS</a>
          <a href="#" className="hover:text-green-300 transition">COMMERCE</a>
          <a href="#" className="hover:text-green-300 transition">CONTACT</a>
          <a href="#" className="hover:text-green-300 transition">SIMPLE PAGE</a>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <FaFacebookF className="hover:text-green-400 cursor-pointer text-lg" />
          <FaTwitter className="hover:text-green-400 cursor-pointer text-lg" />
      
        </div>
      </div>
      <div className="text-center mt-6 text-xs text-green-200">
        Made with <span className="text-red-400">&lt;3</span> BY SUSHAN TAMANG<br />
        &copy; DHYAN 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
