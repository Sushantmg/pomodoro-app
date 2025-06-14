"use client";

import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Navbar from "./Navbar/Navbar";
import Loading from "./loading";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isLoggedIn, loading } = useAuth();

  if (loading) return <Loading />;

  const showNavbar = isLoggedIn && pathname !== "/login";

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
    </>
  );
}
