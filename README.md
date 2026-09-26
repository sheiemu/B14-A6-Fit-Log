# 💪 FitLog — Workout Library

FitLog is a modern, responsive workout library and planning web application built with Next.js. Users can browse workouts, view detailed exercise information, add exercises to today's workout plan, save workouts for later, and manage their plan from one place.

## 🚀 Live Project

**Live Link:** Add your deployed link here

**GitHub Repository:** Add your GitHub repository link here

---

## 🛠️ Technologies Used

* **Next.js** — React framework and application routing
* **TypeScript** — Type-safe development
* **Tailwind CSS** — Responsive and modern UI styling
* **Next.js App Router** — Page navigation and routing
* **React Toastify** — Toast notifications
* **localStorage** — Persisting workout plan and saved workouts
* **FitLog REST API** — Workout data and exercise details

---

## ✨ Key Features

### 1. 🏋️ Workout Library

* Displays workouts fetched from the FitLog API
* Responsive workout card grid
* Shows workout image, muscle groups, equipment, duration, calories, and rating
* Clicking a workout opens its detailed page

### 2. 📋 Today's Plan & Saved Workouts

* Add workouts to today's plan
* Save workouts for later
* Plan and Saved counters update in the navbar
* Workout data persists using localStorage
* Today's plan supports up to 5 exercises

### 3. 🔎 Detailed Workout Pages

* Large workout image and complete exercise information
* Equipment, difficulty, sets, reps, duration, calories, and rating
* Step-by-step workout instructions
* Add to plan and Save for later actions
* Toast notifications for user actions

### 4. 📊 My Plan Management

* Separate Today's Plan and Saved tabs
* Dynamic Exercises, Minutes, and Calories statistics
* Sort workouts by Duration, Calories, or Rating
* View workout details
* Mark planned workouts as done
* Remove workouts from the list
* Toast notifications for completed actions

### 5. 📱 Responsive Design

* Designed for mobile, tablet, and desktop screens
* Responsive navigation bar
* Responsive workout cards and detail layouts
* Mobile-friendly My Plan page
* Responsive footer and empty states

### 6. ⚡ User Experience

* Loading animation while workout data is being fetched
* Custom 404 page for invalid routes
* Toast notifications for important actions
* Active navigation state
* Empty state when no workouts are available in a list

---

## 🔗 API

FitLog uses the following REST API:

**All Workouts**

```text
https://api.abcz.workers.dev/api/fitlog
```

**Single Workout**

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## 📂 Main Pages

| Route            | Description                      |
| ---------------- | -------------------------------- |
| `/workouts`      | Workout library and hero section |
| `/workouts/:id`  | Individual workout details       |
| `/my-plan`       | Today's Plan and Saved workouts  |
| `/invalid-route` | Displays the custom 404 page     |

---

## 🎯 Main Functionalities

* Browse workout library
* View workout details
* Add exercises to today's plan
* Save exercises for later
* Remove planned or saved workouts
* Mark planned workouts as completed
* Sort workouts by duration, calories, or rating
* Track workout statistics
* Persist plan and saved data with localStorage
* Responsive navigation and layouts
* Custom loading and 404 states

---

## 📦 Getting Started

Clone the repository and install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

To create a production build:

```bash
npm run build
```

---

## 👨‍💻 Project

**Project Name:** B14-A6-Fit Log

**Type:** Workout Library & Planning Web Application

Built with ❤️ using Next.js and Tailwind CSS.
