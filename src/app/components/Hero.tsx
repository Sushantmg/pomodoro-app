"use client";

import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-50 via-green-100 to-green-200 text-gray-800 font-sans">
      <main className="flex-grow px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-green-900 drop-shadow-sm">
            Maximize Your Productivity with the Ultimate Pomodoro Timer
          </h1>
          <p className="text-lg text-green-800/80">
            A sleek, customizable timer app based on the Pomodoro Technique. Designed for focused workflows, time tracking, and improving deep work sessions for students, developers, and professionals.
          </p>
        </div>

        <section className="max-w-3xl mx-auto mt-12 space-y-6 text-left bg-green-100/70 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold text-green-900">What is Pomodoro Timer?</h2>
          <p className="text-green-800">
            Our Pomodoro Timer leverages a science-backed time management method that divides work into intervals—typically 25 minutes—called &quot;Pomodoros,&quot; followed by short breaks. It enhances concentration, reduces mental fatigue, and helps maintain peak productivity throughout your day.
          </p>

          <h2 className="text-2xl font-semibold text-green-900">How It Works</h2>
          <ol className="list-decimal list-inside space-y-1 text-green-800">
            <li>Add and organize your tasks for the day</li>
            <li>Set how many Pomodoros (25-min blocks) you estimate per task</li>
            <li>Click start and work until the timer ends</li>
            <li>Take a 5-minute break, then continue with the next Pomodoro</li>
            <li>After four Pomodoros, take a longer 15–30 minute break</li>
          </ol>
        </section>

        <section className="max-w-3xl mx-auto mt-12 bg-green-100/70 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-green-900">Basic Features</h2>
          <ul className="list-disc list-inside space-y-1 text-green-800">
            <li>Customizable durations for focus, short break, and long break</li>
            <li>Task management with Pomodoro estimates</li>
            <li>Estimated finish time based on task list</li>
            <li>Clean UI with light/dark theme toggle</li>
            <li>Sound effects and background ambient sounds</li>
            <li>Visual productivity report by day, week, and month</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-3 text-green-900">Premium Features</h2>
          <ul className="list-disc list-inside space-y-1 text-green-800">
            <li>Create and track time across multiple projects</li>
            <li>Yearly performance summaries with trends and graphs</li>
            <li>Export productivity history in CSV format</li>
            <li>Save unlimited task templates for quick reuse</li>
            <li>Integrate with Todoist for seamless task syncing</li>
            <li>Webhook support for automation tools like Zapier &amp; IFTTT</li>
            <li>100% ad-free and distraction-free environment</li>
          </ul>
        </section>

        <section className="max-w-3xl mx-auto mt-12 bg-green-100/70 p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-semibold mb-3 text-green-900">Download the App</h2>
          <ul className="list-disc list-inside space-y-1 text-green-800">
            <li>For macOS: <a className="text-green-700 underline" href="#">pomofocus-1.1.0-mac.dmg</a></li>
            <li>For Windows: <a className="text-green-700 underline" href="#">pomofocus-1.1.0-win-x64.zip</a></li>
            <li>For Linux: <a className="text-green-700 underline" href="#">pomofocus-1.1.0-lin-amd64.zip</a></li>
          </ul>
          <p className="text-sm text-green-600 mt-2">
            Windows may show a security warning—click &quot;Details&quot; then &quot;Run anyway&quot; to proceed.
          </p>
        </section>
      </main>
    </div>
  );
}
