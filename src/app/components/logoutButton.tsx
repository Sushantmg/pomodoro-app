"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth} from '@/context/AuthContext';

const LogoutButton = () => {
  const { logout, isLoggedIn } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  if (!isLoggedIn) return null;

  return (
    <button
      onClick={handleLogout}
      className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
