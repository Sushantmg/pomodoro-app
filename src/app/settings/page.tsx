"use client";

import { useAuth } from "@/context/AuthContext";

export default function SettingsPage() {
  const { logout } = useAuth();

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>
      <button
        onClick={logout}
        className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}
