"use client";

import { useState, useEffect } from "react";
import Slider from "./Slider";


const CHECKPOINTS = [10, 25, 40, 60];

const Timer: React.FC = () => {
  const [selectedMinutes, setSelectedMinutes] = useState(25);
  const [secondsLeft, setSecondsLeft] = useState(selectedMinutes * 60);
  const [isRunning, setIsRunning] = useState(false);


  useEffect(() => {
    setSecondsLeft(selectedMinutes * 60);
    setIsRunning(false);
  }, [selectedMinutes]);

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
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="max-w-md mx-auto p-6 text-center font-minecraft text-amber-950 relative mt-50" >
      {/* Timer */}
      <h1 className="text-6xl font-bold mb-8">{formatTime(secondsLeft)}</h1>

      {/* Slider with proper props */}
      <Slider
        min={5}
        max={60}
        step={5}
        checkpoints={CHECKPOINTS}
        value={selectedMinutes}
        onChange={(val) => setSelectedMinutes(val)}
      />

      {/* Control Buttons */}
      <div className="flex gap-5 mt-6">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="w-full px-6 py-3 rounded hover:opacity-90 hover:scale-105 transition text-lg shadow-inner bg-[#ffd17d] text-amber-950 font-extrabold"
        >
          {isRunning ? "Pause" : "Start"}
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setSecondsLeft(selectedMinutes * 60);
          }}
          className="w-full px-6 py-3 rounded hover:opacity-90 hover:scale-105 transition text-lg shadow-inner bg-amber-950 text-[#ffd17d] font-extrabold"
        >
          Reset
        </button>
      </div>

    </div>
  );
};

export default Timer;
