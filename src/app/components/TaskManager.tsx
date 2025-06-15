"use client";

import React, { useState, useEffect } from "react";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  // Load tasks from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("pomodoro-tasks");
    if (saved) setTasks(JSON.parse(saved));
  }, []);

  // Save tasks to localStorage on every change
  useEffect(() => {
    localStorage.setItem("pomodoro-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!input.trim()) return;
    const newTask: Task = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setInput("");
  };

  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="mt-12 p-4 rounded-lg shadow-inner text-white w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">📝 Task Manager</h2>

      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          className="flex-grow px-3 py-2 rounded-l bg-white/20 text-white placeholder:text-white/70 outline-none"
        />
        <button
          onClick={addTask}
          className="px-4 py-2 bg-amber-500 text-white rounded-r hover:bg-amber-600 transition"
        >
          Add
        </button>
      </div>

      <ul className="space-y-2 max-h-52 overflow-y-auto scrollbar-thin scrollbar-thumb-amber-500">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-white/10 rounded px-3 py-2"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="accent-amber-500 w-4 h-4"
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-300" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-sm text-red-400 hover:text-red-600"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
