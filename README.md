# 🧘‍♂️ DHYAN – Pomodoro Timer App

**DHYAN** is a beautifully designed Pomodoro Timer app focused on helping developers, students, and productivity seekers to concentrate better using the Pomodoro technique. This app is built with modern technologies and clean UI/UX principles.

![Screenshot](public/preview.png)

---

## 🚀 Features

### ✅ Basic Features:
- Focus / Short Break / Long Break modes
- Dynamic timer with start, pause, and reset
- Custom duration using a stylish slider
- Smooth audio transitions per mode
- Responsive design with background GIF and glass effect UI

### ✅ Task Manager:
- Add, toggle, and delete tasks
- Tasks saved in **cookies** for session persistence

### ✅ User Authentication:
- Simple login/logout system using cookies (no backend)
- Protected routes for authenticated users

### ✅ Advanced:
- Animated multilingual welcome screen (Nepali, Japanese, Korean, etc.)
- Toggleable settings panel (Navbar)
- Custom slider with MUI and checkpoint snapping

---

## 🧠 Pomodoro Technique

Pomodoro is a time management method using focused intervals (typically 25 minutes) followed by short breaks. After 4 sessions, you take a long break. This helps improve deep focus and prevents burnout.

---

## 🛠 Tech Stack

| Technology        | Description                          |
|-------------------|--------------------------------------|
| [Next.js 15](https://nextjs.org/)       | App framework (App Router)           |
| [React 19](https://reactjs.org/)        | Component-based UI                  |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first CSS for styling        |
| [Framer Motion](https://www.framer.com/motion/) | Animations (welcome message, transitions) |
| [MUI](https://mui.com/)                | Slider component with styling       |
| [React Icons](https://react-icons.github.io/react-icons/) | Icon packs                          |
| [React Hook Form](https://react-hook-form.com/) | Form handling                      |

---



---

## 🔒 Authentication Logic

- Uses React Context for state sharing
- Stores login state using browser **cookies**
- Routes are protected via a wrapper component `ClientWrapper.tsx`

---

## 🍪 Task Persistence

Unlike `localStorage`, tasks are stored and loaded from **cookies**, which:
- Keep data safe from React hydration mismatches
- Avoid manual backend setup

---

