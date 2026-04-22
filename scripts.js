
// This is an array of objects (drills)
const drills = [
  { id: 1, name: "Jumping Jacks", difficulty: "Beginner", category: ["Cardio","Endurance"], goal: ["fat loss","endurance"], routine: "30 sec x 3", time: 90, image: "assets/jumping-jacks.gif", description: "A full-body cardio exercise that raises heart rate and improves coordination." },
  { id: 2, name: "Push-Ups", difficulty: "Intermediate", category: ["Strength","Full Body"], goal: ["strength"], routine: "10-15 reps x 3", time: 135, image: "assets/push-ups.gif", description: "An upper-body exercise targeting chest, shoulders, and triceps." },
  { id: 3, name: "Bodyweight Squats", difficulty: "Beginner", category: ["Strength"], goal: ["strength","endurance"], routine: "15 reps x 3", time: 135, image: "assets/bodyweight-squats.gif", description: "A lower-body movement that builds leg strength and balance." },
  { id: 4, name: "Plank", difficulty: "Beginner", category: ["Core","Endurance"], goal: ["core strength"], routine: "30-60 sec x 3", time: 135, image: "assets/plank.gif", description: "A core stability exercise that strengthens abs and improves posture." },
  { id: 5, name: "Mountain Climbers", difficulty: "Intermediate", category: ["Cardio","Core"], goal: ["fat loss","endurance"], routine: "30 sec x 4", time: 120, image: "assets/mountain-climbers.gif", description: "A fast-paced exercise that builds endurance and core strength." },
  { id: 6, name: "Burpees", difficulty: "Advanced", category: ["Cardio","Full Body","Speed"], goal: ["fat loss","power"], routine: "10 reps x 4", time: 180, image: "assets/burpees.gif", description: "A high-intensity full-body movement that improves power and conditioning." },
  { id: 7, name: "Lunges", difficulty: "Beginner", category: ["Strength"], goal: ["strength"], routine: "10 each leg x 3", time: 135, image: "assets/lunges.gif", description: "A leg exercise that improves strength, balance, and coordination." },
  { id: 8, name: "High Knees", difficulty: "Beginner", category: ["Cardio","Speed"], goal: ["endurance","fat loss"], routine: "30 sec x 4", time: 120, image: "assets/high-knees.gif", description: "A cardio drill that boosts heart rate and improves agility." },
  { id: 9, name: "Wall Sit", difficulty: "Intermediate", category: ["Endurance","Strength"], goal: ["endurance"], routine: "45 sec x 3", time: 135, image: "assets/wall-sit.gif", description: "An isometric leg exercise that builds endurance and strength." },
  { id: 10, name: "Bear Crawl", difficulty: "Advanced", category: ["Full Body","Core"], goal: ["endurance","mobility"], routine: "20 sec x 4", time: 80, image: "assets/bear-crawl.gif", description: "A crawling movement that engages the full body and improves coordination." },
  { id: 11, name: "Arm Circles", difficulty: "Beginner", category: ["Mobility"], goal: ["mobility"], routine: "30 sec each direction", time: 60, image: "assets/arm-circles.gif", description: "A simple movement to warm up shoulders and improve mobility." },
  { id: 12, name: "Butt Kicks", difficulty: "Beginner", category: ["Cardio"], goal: ["endurance"], routine: "30 sec x 4", time: 120, image: "assets/butt-kicks.gif", description: "A light cardio exercise that warms up the legs and improves coordination." },
  { id: 13, name: "Standing Toe Touches", difficulty: "Beginner", category: ["Mobility","Core"], goal: ["mobility"], routine: "15 reps x 3", time: 120, image: "assets/standing-toe-touches.gif", description: "A flexibility movement targeting hamstrings and lower back." },
  { id: 14, name: "Side Lunges", difficulty: "Intermediate", category: ["Strength","Mobility"], goal: ["strength","mobility"], routine: "10 each side x 3", time: 135, image: "assets/side-lunges.gif", description: "A lateral movement that strengthens legs and improves hip mobility." },
  { id: 15, name: "Skater Jumps", difficulty: "Intermediate", category: ["Cardio","Speed"], goal: ["fat loss","power"], routine: "20 sec x 4", time: 80, image: "assets/skater-jumps.gif", description: "A side-to-side jump that builds agility and explosive power." },
  { id: 16, name: "Inchworm Walkout", difficulty: "Intermediate", category: ["Full Body","Mobility"], goal: ["mobility"], routine: "8 reps x 3", time: 120, image: "assets/inchworm-walkout.gif", description: "A full-body stretch and strength movement improving flexibility." },
  { id: 17, name: "Tuck Jumps", difficulty: "Advanced", category: ["Speed","Cardio"], goal: ["power","fat loss"], routine: "6-8 reps x 4", time: 120, image: "assets/tuck-jumps.gif", description: "A plyometric exercise that builds explosive leg power." },
  { id: 18, name: "Superman Hold", difficulty: "Beginner", category: ["Core"], goal: ["core strength"], routine: "30 sec x 3", time: 90, image: "assets/superman-hold.gif", description: "A back-strengthening hold that improves posture and stability." },
  { id: 19, name: "Reverse Crunches", difficulty: "Intermediate", category: ["Core"], goal: ["core strength"], routine: "12 reps x 3", time: 120, image: "assets/reverse-crunch.gif", description: "An abdominal exercise targeting the lower abs." },
  { id: 20, name: "Standing Calf Raises", difficulty: "Beginner", category: ["Strength"], goal: ["strength"], routine: "20 reps x 3", time: 120, image: "assets/standing-calf-raises.gif", description: "A simple exercise that strengthens the calf muscles." },
  { id: 21, name: "Fast Feet", difficulty: "Intermediate", category: ["Speed","Cardio"], goal: ["speed","endurance"], routine: "20 sec x 5", time: 100, image: "assets/fast-feet.gif", description: "A quick footwork drill that improves speed and agility." },
  { id: 22, name: "Side Plank", difficulty: "Intermediate", category: ["Core","Endurance"], goal: ["core strength"], routine: "30 sec each side", time: 60, image: "assets/side-plank.gif", description: "A core exercise targeting obliques and stability." },
  { id: 23, name: "Step Back Lunges", difficulty: "Beginner", category: ["Strength"], goal: ["strength"], routine: "10 each leg x 3", time: 135, image: "assets/step-back-lunges.gif", description: "A controlled lunge variation that improves balance and strength." },
  { id: 24, name: "Frog Jumps", difficulty: "Advanced", category: ["Speed","Strength"], goal: ["power"], routine: "8 reps x 4", time: 120, image: "assets/frog-jumps.gif", description: "A powerful jump exercise that builds explosive strength." },
  { id: 25, name: "Plank Shoulder Taps", difficulty: "Intermediate", category: ["Core","Full Body"], goal: ["core strength"], routine: "20 taps x 3", time: 90, image: "assets/plank-shoulder-taps.gif", description: "A plank variation that challenges balance and core control." },
  { id: 26, name: "Marching in Place", difficulty: "Beginner", category: ["Cardio"], goal: ["endurance"], routine: "30 sec x 3", time: 90, image: "assets/marching-in-place.gif", description: "A light cardio movement suitable for warming up." },
  { id: 27, name: "Standing Side Bends", difficulty: "Beginner", category: ["Core","Mobility"], goal: ["core strength","mobility"], routine: "12 each side x 3", time: 120, image: "assets/standing-side-bends.gif", description: "A movement that stretches and strengthens the obliques." },
  { id: 28, name: "Broad Jumps", difficulty: "Advanced", category: ["Speed","Full Body"], goal: ["power"], routine: "6 reps x 4", time: 120, image: "assets/broad-jumps.gif", description: "A forward jump that builds lower-body power." },
  { id: 29, name: "Wall Push-Ups", difficulty: "Beginner", category: ["Strength"], goal: ["strength"], routine: "12 reps x 3", time: 120, image: "assets/wall-push-ups.gif", description: "A beginner-friendly push-up variation using a wall." },
  { id: 30, name: "Balance Hold (One Leg)", difficulty: "Beginner", category: ["Core","Mobility"], goal: ["core strength","mobility"], routine: "30 sec each leg", time: 60, image: "assets/balance-hold.gif", description: "A balance exercise that improves stability and coordination." },
  { id: 31, name: "Sit-Ups", difficulty: "Intermediate", category: ["Core","Endurance"], goal: ["core strength"], routine: "12-15 reps x 3", time: 120, image: "assets/sit-ups.gif", description: "A classic abdominal exercise for building core strength." },
  { id: 32, name: "Russian Twists", difficulty: "Intermediate", category: ["Core"], goal: ["core strength","fat loss"], routine: "20 twists x 3", time: 120, image: "assets/russian-twists.gif", description: "A rotational core exercise targeting the obliques." }
];

// GLOBAL STATE

// Store the container for the drill cards
const drillContainer = document.getElementById("drill-container");
// Store all drills 
let allDrills = drills;
// Store filtered drills (changes based on user input)
let filteredDrills = [...allDrills];

// Store current filters
let activeFilters = {
  searchQuery: "",
  difficulty: "",
  category: "",
  goal: "",
  sort: "",
};


// INITIALIZATION

// Runs when page loads
function initApp() {
  // Set up event listeners
  setupEventListeners();
  // Render all drills
  applyFilters();
  console.log("App initialized");
}



// RENDERING FUNCTIONS

// Renders all drill cards to the DOM
function renderDrills(drillList) {
  // Clear container
  drillContainer.innerHTML = "";
  
  //if the list is empty, no drills will be showen
  if (drillList.length == 0) {
    drillContainer.textContent = "No drills found. Please search again or reset/change filters.";
    return;
  }
  
  //append drills to to the DOM
  for (let drill of drillList) {
    let drillCard = createDrillCard(drill)
    drillContainer.appendChild(drillCard)
  }
}


// Creates a single drill card element
function createDrillCard(drill) {
  // Create DOM elements
  // Fill with drill data
  // Return the complete card

  let newCard = document.createElement("div");
  newCard.classList.add("drill-card");

  let cardImage = document.createElement("img");
  cardImage.classList.add("drill-img");
  cardImage.src = drill.image || "https://placehold.co/60x40";
  cardImage.alt = drill.name;

  let content = document.createElement("div");
  content.classList.add("drill-content");
  
  let title = document.createElement("h3");
  title.textContent = drill.name;

  let difficulty = document.createElement("p");
  let diffStrong = document.createElement("strong");
  diffStrong.textContent = "Difficulty: ";
  difficulty.append(diffStrong);
  difficulty.append(drill.difficulty);
  difficulty.classList.add("difficulty", drill.difficulty);
  
  let category = document.createElement("p");
  let catStrong = document.createElement("strong");
  catStrong.textContent = "Category: ";
  category.append(catStrong);
  category.append(drill.category.join(", "));

  let goal = document.createElement("p");
  let goalStrong = document.createElement("strong");
  goalStrong.textContent = "Goal: ";
  goal.append(goalStrong);
  goal.append(drill.goal.join(", "));

  let routine = document.createElement("p");
  let routStrong = document.createElement("strong");
  routStrong.textContent = "Routine: ";
  routine.append(routStrong);
  routine.append(drill.routine);

  let time = document.createElement("p");
  let timeStrong = document.createElement("strong");
  timeStrong.textContent = "Total Time: ";
  time.append(timeStrong);
  time.append(drill.time + " sec");

  let description = document.createElement("p");
  description.textContent = drill.description;
  description.classList.add("description");

  content.append(title, difficulty, category, goal, routine, time, description);
  newCard.append(cardImage, content);
  return newCard;
}


// FILTERING FUNCTIONS

// Filters drills based on activeFilters
function applyFilters() {
  const query = activeFilters.searchQuery.toLowerCase();
  let result = [...allDrills];

  result = result.filter(drill => {
    const matchesSearch =
      drill.name.toLowerCase().includes(query) ||
      drill.description.toLowerCase().includes(query);

    const matchesDifficulty =
      activeFilters.difficulty === "" ||
      drill.difficulty === activeFilters.difficulty;

    const matchesCategory =
      activeFilters.category === "" ||
      drill.category.includes(activeFilters.category);

    const matchesGoal =
      activeFilters.goal === "" ||
      drill.goal.includes(activeFilters.goal);

    return matchesSearch && matchesDifficulty && matchesCategory && matchesGoal;
  });

  if (activeFilters.sort !== "") {
    result = sortDrills(result, activeFilters.sort);
  }

  filteredDrills = result;
  renderDrills(filteredDrills);
}

// Resets all filters
function resetFilters() {
  // Clear activeFilters
  // Reset filteredDrills
  // Re-render drills

  activeFilters = {
    searchQuery: "",
    difficulty: "",
    category: "",
    goal: "",
    sort: "",
  };

  filteredDrills = [...allDrills];

  document.getElementById("search-input").value = "";
  document.getElementById("difficulty-filter").value = "";
  document.getElementById("category-filter").value = "";
  document.getElementById("goal-filter").value = "";
  document.getElementById("sort-select").value = "";

  renderDrills(filteredDrills);
}

// SORTING FUNCTIONALITY

// Sort drills (e.g., by difficulty or time)
function sortDrills(list, criteria) {
  // Sort filteredDrills based on criteria
  // Re-render

  const result = [...list];
  if (criteria === "time") {
    result.sort((a, b) => a.time - b.time);
  }

  if (criteria === "difficulty") {
    const order = {Beginner: 1, Intermediate: 2, Advanced: 3};
    result.sort((a, b) => order[a.difficulty] - order[b.difficulty]);
  }

  return result;
}

// EVENT LISTENERS

// Attach all event listeners
function setupEventListeners() {
  // Buttons (filters, reset)
  // Search input
  // Dropdowns

  const searchFilter = document.getElementById("search-input");
  searchFilter.addEventListener("input", (e) => {activeFilters.searchQuery = e.target.value; applyFilters();});

  const difficultyFilter = document.getElementById("difficulty-filter");
  difficultyFilter.addEventListener("change", (e) => {activeFilters.difficulty = e.target.value; applyFilters();});

  const categoryFilter = document.getElementById("category-filter");
  categoryFilter.addEventListener("change", (e) => {activeFilters.category = e.target.value; applyFilters();});

  const goalFilter = document.getElementById("goal-filter");
  goalFilter.addEventListener("change", (e) => {activeFilters.goal = e.target.value; applyFilters();});

  const sortFilter = document.getElementById("sort-select");
  sortFilter.addEventListener("change", (e) => {activeFilters.sort = e.target.value; applyFilters();});

  const resetFilter = document.getElementById("reset-btn");
  resetFilter.addEventListener("click", () => {resetFilters()});

  const generateBtn = document.getElementById("generate-plan");
  generateBtn.addEventListener("click", generateWorkoutPlan);
}

// Workout Plan Generator

function generateWorkoutPlan() {
  let pool = [...filteredDrills];

  if (pool.length === 0) {
    document.getElementById("workout-plan").innerHTML =
      "<p>No drills available to generate a plan.</p>";
    return;
  }

  // prioritize filters 
  const shuffled = shuffleArray(pool);

  // pick 6–8 drills depending on availability
  const size = Math.min(6, shuffled.length);
  const plan = shuffled.slice(0, size);

  renderWorkoutPlan(plan);
}

// Used Fisher-Yates shuffle to pick random drills
function shuffleArray(array) {
  const arr = [...array];

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

// Calculates total workout time
function calculateTotalTime(drillList) {
  // Sum time values
  // Return total
  return drillList.reduce((sum, drill) => sum + drill.time, 0);
}


// Displays workout plan to user
function renderWorkoutPlan(plan) {
  const container = document.getElementById("workout-plan");
  container.innerHTML = "";

  if (plan.length === 0) {
    let msg = document.createElement("p");
    msg.textContent = "No workout plan generated. Try adjusting filters.";
    container.appendChild(msg);
    return;
  }

  let totalTime = calculateTotalTime(plan);

  let title = document.createElement("h2");
  title.textContent = "Workout Plan";
  container.appendChild(title);

  let time = document.createElement("p");
  time.textContent = "Total Time: " + totalTime + " sec";
  container.appendChild(time);

  for (let i = 0; i < plan.length; i++) {
    let drill = plan[i];

    let item = document.createElement("div");
    item.classList.add("plan-item");

    let name = document.createElement("p");
    let strong = document.createElement("strong");
    strong.textContent = (i + 1) + ". ";
    name.append(strong);
    name.append(drill.name);

    let routine = document.createElement("p");
    routine.textContent = "Routine: " + drill.routine;

    let timeText = document.createElement("p");
    timeText.textContent = "Time: " + drill.time + " sec";

    item.append(name, routine, timeText);
    container.appendChild(item);
  }
}


// START APP

initApp();
