# 🏋️ Workout Drill Catalog — Snap Engineering Academy Stage 2 Project

Welcome to the Workout Drill Catalog! An interactive fitness website where you can
explore 32 bodyweight drills, filter them down to exactly what you need, and walk
away with a ready-to-go workout plan. No gym required.

This was built for the Snap Engineering Academy Stage 2 project.

<img width="1710" height="963" alt="Screenshot 2026-04-21 at 6 13 27 PM" src="https://github.com/user-attachments/assets/f51eb7f1-64b7-42e5-8d09-6cd749388331" />

---

## 🧠 Features

- 🏃 **Drill Catalog:** 32 bodyweight exercises with difficulty, category, goal, routine, and timing info
- 🔎 **Search:** Find any drill instantly by name or description
- 🎛 **Filters:** Narrow things down by difficulty, category, or fitness goal
- 🔢 **Sorting:** Order drills by time or difficulty
- 🔄 **Reset:** One click to get back to the full catalog
- ⚡ **Workout Generator:** Builds a random 6-drill plan from whatever you have filtered using a Fisher-Yates shuffle
- ⏱ **Time Calculator:** Totals up your workout time automatically using `reduce`
- 📱 **Responsive:** Works across desktop, tablet, and mobile

---

## 🚀 How to Run

1. Clone or download the repo
2. Open `index.html` in Chrome
3. Filter, browse, and generate your workout

Live site: 👉 **https://christiant07.github.io/SEA-Project/**

---

## 📚 Data Structure

All 32 drills live in a JavaScript array of objects in `scripts.js`:

```js
{
  id: 1,
  name: "Jumping Jacks",
  difficulty: "Beginner",
  category: ["Cardio", "Endurance"],
  goal: ["fat loss", "endurance"],
  routine: "30 sec x 3",
  time: 90,
  image: "assets/jumping-jacks.gif",
  description: "A full-body cardio exercise that raises heart rate and improves coordination."
}
```

---

## 🏋️ Thanks for checking it out 💪 🔥

I hope this helps you find a solid workout. Now let's get moving. 🏃
