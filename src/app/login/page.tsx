"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

type FormValues = {
  username: string;
  password: string;
};

const welcomeMessages = [
  "स्वागतम्", // Nepali
  "Welcome", // English
  "ようこそ", // Japanese
  "환영합니다", // Korean
  "Bienvenido", // Spanish
];

const fadeDuration = 1; // seconds

const LoginPage = () => {
  const { login, isLoggedIn } = useAuth();
  const router = useRouter();

  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  // Cycle language every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLangIndex(
        (prevIndex) => (prevIndex + 1) % welcomeMessages.length
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn, router]);

const onSubmit: SubmitHandler<FormValues> = (data) => {
  console.log("Login with", data);
  login();
  router.push("/");
};


  if (isLoggedIn) return null;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-amber-50 via-amber-100 to-amber-200 px-4">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl max-w-md w-full p-10 border border-amber-300">
        <div className="relative h-[56px] mb-8 flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentLangIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: fadeDuration }}
              className="text-4xl font-extrabold text-amber-700 tracking-wide"
              style={{ position: "absolute" }}
            >
              {welcomeMessages[currentLangIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
          noValidate
        >
          <div>
            <input
              type="text"
              placeholder="Username"
              className={`w-full p-3 rounded-lg border focus:outline-none transition 
                ${
                  errors.username
                    ? "border-red-500 ring-red-300 ring-2"
                    : "border-amber-300 focus:border-amber-500 focus:ring-amber-200 ring-1"
                }`}
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.username.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className={`w-full p-3 rounded-lg border focus:outline-none transition 
                ${
                  errors.password
                    ? "border-red-500 ring-red-300 ring-2"
                    : "border-amber-300 focus:border-amber-500 focus:ring-amber-200 ring-1"
                }`}
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 mt-1 text-sm">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold shadow-md transition-transform active:scale-95"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-amber-700 opacity-80">
          &copy; 2025 DHYAN
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
