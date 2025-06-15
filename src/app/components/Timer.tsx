"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "./Slider";
import TaskManager from "./TaskManager";

const MODE_SETTINGS = {
  focus: { label: "Focus", duration: 25, music: "/audio/focus-music.mp3.mp3" },
  shortBreak: {
    label: "Short Break",
    duration: 5,
    music: "/audio/short-break.mp3.mp3",
  },
  longBreak: {
    label: "Long Break",
    duration: 15,
    music: "/audio/long-break.mp3.mp3",
  },
};

const Timer: React.FC = () => {
  const [mode, setMode] = useState<"focus" | "shortBreak" | "longBreak">(
    "focus"
  );
  const [secondsLeft, setSecondsLeft] = useState(
    MODE_SETTINGS[mode].duration * 60
  );
  const [isRunning, setIsRunning] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    setSecondsLeft(MODE_SETTINGS[mode].duration * 60);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isRunning) {
      audioRef.current.src = MODE_SETTINGS[mode].music;
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isRunning, mode]);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (secs: number) => {
    const minutes = Math.floor(secs / 60);
    const seconds = secs % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center font-minecraft text-black">
      {/* Background GIF with higher opacity for clarity */}
      <div
        className="absolute inset-0 bg-covera bg-center opacity-100 -z-10"
        style={{ backgroundImage: "url('/background.gif')" }}
      />

      <audio ref={audioRef} loop />

        {/* Transparent container with Liquid Glass effect */}
<div className="rounded-3xl p-10 max-w-md w-full text-center bg-white/1 backdrop-blur-sm border border-white/10 shadow-lg">
  {/* Mode Buttons */}
  <div className="flex justify-center gap-6 mb-8">
    {Object.entries(MODE_SETTINGS).map(([key, { label }]) => (
      <button
        key={key}
        onClick={() =>
          setMode(key as "focus" | "shortBreak" | "longBreak")
        }
        className={`px-6 py-3 rounded-full font-semibold transition-transform duration-300 ease-in-out shadow-md
          ${
            mode === key
              ? "bg-amber-500 text-white shadow-amber-400 scale-110"
              : "bg-white/70 text-amber-800 hover:bg-white/90 hover:scale-105"
          }
        `}
        aria-pressed={mode === key}
      >
        {label}
      </button>
    ))}
  </div>

  {/* Timer Display */}
  <h1 className="text-7xl font-extrabold mb-10 tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
    {formatTime(secondsLeft)}
  </h1>

  {/* Slider */}
  <Slider
    min={1}
    max={60}
    step={1}
    checkpoints={[5, 10, 15, 25, 30, 40, 50, 60]}
    value={Math.floor(secondsLeft / 60)}
    onChange={(val) => {
      setSecondsLeft(val * 60);
    }}
  />

  {/* Controls */}
  <div className="flex gap-6">
    <button
      onClick={() => setIsRunning(!isRunning)}
      className="flex-1 px-6 py-4 rounded-2xl font-extrabold bg-gradient-to-r from-amber-400 to-amber-600 text-white shadow-lg hover:brightness-110 active:brightness-90 transition"
    >
      {isRunning ? "Pause" : "Start"}
    </button>

    <button
      onClick={() => {
        setIsRunning(false);
        setSecondsLeft(MODE_SETTINGS[mode].duration * 60);
      }}
      className="flex-1 px-6 py-4 rounded-2xl font-extrabold border-2 border-amber-500 text-amber-600 hover:bg-amber-100 transition"
    >
      Reset
    </button>
  </div>
  <TaskManager/>
</div>

</div>
  );
  
};

export default Timer;
