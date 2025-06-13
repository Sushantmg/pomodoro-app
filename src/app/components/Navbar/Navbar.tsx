import React from "react";
import { FaHome, FaCog } from "react-icons/fa";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center font-mono">
      <div className="text-2xl font-bold  text-gray-800">Pomodororo</div>

      <ul className="flex space-x-6 text-gray-700 font-medium">
        <Link href={"/"}>
          <li className="flex items-center gap-1 hover:text-amber-500 cursor-pointer transition-colors">
            <FaHome size={18} />
            <span>Home</span>
          </li>
        </Link>
        <Link href={"/settings"}>
          <li className="flex items-center gap-1 hover:text-amber-500 cursor-pointer transition-colors">
            <FaCog size={18} />
            <span>Settings</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
