"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import Timer from "./components/Timer";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


export default function Homepage() {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, [isLoggedIn]);

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen">
      <Timer />
      <Hero/>
      <Footer/>
    </div>
  );
}
