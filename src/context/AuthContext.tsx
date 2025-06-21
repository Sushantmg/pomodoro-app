"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";

// Cookie utilities
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

// ✅ Define the type for context
interface AuthContextType {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  loading: boolean;
}

// ✅ Use correct type
const AuthContext = createContext<AuthContextType | null>(null);

// ✅ AuthProvider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = getCookie("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setLoading(false);
  }, []);

  const login = () => {
    setCookie("isLoggedIn", "true", 7);
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

// ✅ Safer useAuth with null check
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
