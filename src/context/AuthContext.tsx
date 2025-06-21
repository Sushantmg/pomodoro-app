"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Simple cookie functions defined inside this file
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
};

const getCookie = (name: string) => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`))
    ?.split("=")[1];
};

const removeCookie = (name: string) => {
  setCookie(name, "", -1);
};


const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = getCookie("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setLoading(false);
  }, []);

  const login = () => {
    setCookie("isLoggedIn", "true", 7); // lasts 7 days
    setIsLoggedIn(true);
    router.push("/");
  };

  const logout = () => {
    removeCookie("isLoggedIn");
    setIsLoggedIn(false);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
