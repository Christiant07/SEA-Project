/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// This is an array of objects (drills)
const drills = [
  { id: 1, name: "Jumping Jacks", difficulty: "Beginner", category: ["Cardio","Endurance"], goal: ["fat loss","endurance"], routine: "30 sec x 3", time: 90, image: "", description: "A full-body cardio exercise that raises heart rate and improves coordination." },
  { id: 2, name: "Push-Ups", difficulty: "Intermediate", category: ["Strength","Full Body"], goal: ["strength"], routine: "10-15 reps x 3", time: 135, image: "", description: "An upper-body exercise targeting chest, shoulders, and triceps." },
  { id: 3, name: "Bodyweight Squats", difficulty: "Beginner", category: ["Strength"], goal: ["strength","endurance"], routine: "15 reps x 3", time: 135, image: "", description: "A lower-body movement that builds leg strength and balance." },
  { id: 4, name: "Plank", difficulty: "Beginner", category: ["Core","Endurance"], goal: ["core strength"], routine: "30-60 sec x 3", time: 135, image: "", description: "A core stability exercise that strengthens abs and improves posture." },
  { id: 5, name: "Mountain Climbers", difficulty: "Intermediate", category: ["Cardio","Core"], goal: ["fat loss","endurance"], routine: "30 sec x 4", time: 120, image: "", description: "A fast-paced exercise that builds endurance and core strength." },
  { id: 6, name: "Burpees", difficulty: "Advanced", category: ["Cardio","Full Body","Speed"], goal: ["fat loss","power"], routine: "10 reps x 4", time: 180, image: "", description: "A high-intensity full-body movement that improves power and conditioning." },
  { id: 7, name: "Lunges", difficulty: "Beginner", category: ["Strength"], goal: ["strength"], routine: "10 each leg x 3", time: 135, image: "", description: "A leg exercise that improves strength, balance, and coordination." },
  { id: 8, name: "High Knees", difficulty: "Beginner", category: ["Cardio","Speed"], goal: ["endurance","fat loss"], routine: "30 sec x 4", time: 120, image: "", description: "A cardio drill that boosts heart rate and improves agility." },
  { id: 9, name: "Wall Sit", difficulty: "Intermediate", category: ["Endurance","Strength"], goal: ["endurance"], routine: "45 sec x 3", time: 135, image: "", description: "An isometric leg exercise that builds endurance and strength." },
  { id: 10, name: "Bear Crawl", difficulty: "Advanced", category: ["Full Body","Core"], goal: ["endurance","mobility"], routine: "20 sec x 4", time: 80, image: "", description: "A crawling movement that engages the full body and improves coordination." },
  { id: 11, name: "Arm Circles", difficulty: "Beginner", category: ["Mobility"], goal: ["mobility"], routine: "30 sec each direction", time: 60, image: "", description: "A simple movement to warm up shoulders and improve mobility." },
  { id: 12, name: "Butt Kicks", difficulty: "Beginner", category: ["Cardio"], goal: ["endurance"], routine: "30 sec x 4", time: 120, image: "", description: "A light cardio exercise that warms up the legs and improves coordination." },
  { id: 13, name: "Standing Toe Touches", difficulty: "Beginner", category: ["Mobility","Core"], goal: ["mobility"], routine: "15 reps x 3", time: 120, image: "", description: "A flexibility movement targeting hamstrings and lower back." },
  { id: 14, name: "Side Lunges", difficulty: "Intermediate", category: ["Strength","Mobility"], goal: ["strength","mobility"], routine: "10 each side x 3", time: 135, image: "", description: "A lateral movement that strengthens legs and improves hip mobility." },
  { id: 15, name: "Skater Jumps", difficulty: "Intermediate", category: ["Cardio","Speed"], goal: ["fat loss","power"], routine: "20 sec x 4", time: 80, image: "", description: "A side-to-side jump that builds agility and explosive power." },
  { id: 16, name: "Inchworm Walkout", difficulty: "Intermediate", category: ["Full Body","Mobility"], goal: ["mobility"], routine: "8 reps x 3", time: 120, image: "", description: "A full-body stretch and strength movement improving flexibility." },
  { id: 17, name: "Tuck Jumps", difficulty: "Advanced", category: ["Speed","Cardio"], goal: ["power","fat loss"], routine: "6-8 reps x 4", time: 120, image: "", description: "A plyometric exercise that builds explosive leg power." },
  { id: 18, name: "Superman Hold", difficulty: "Beginner", category: ["Core"], goal: ["core strength"], routine: "30 sec x 3", time: 90, image: "", description: "A back-strengthening hold that improves posture and stability." },
  { id: 19, name: "Reverse Crunches", difficulty: "Intermediate", category: ["Core"], goal: ["core strength"], routine: "12 reps x 3", time: 120, image: "", description: "An abdominal exercise targeting the lower abs." },
  { id: 20, name: "Standing Calf Raises", difficulty: "Beginner", category: ["Strength"], goal: ["strength"], routine: "20 reps x 3", time: 120, image: "", description: "A simple exercise that strengthens the calf muscles." },
  { id: 21, name: "Fast Feet", difficulty: "Intermediate", category: ["Speed","Cardio"], goal: ["speed","endurance"], routine: "20 sec x 5", time: 100, image: "", description: "A quick footwork drill that improves speed and agility." },
  { id: 22, name: "Side Plank", difficulty: "Intermediate", category: ["Core","Endurance"], goal: ["core strength"], routine: "30 sec each side", time: 60, image: "", description: "A core exercise targeting obliques and stability." },
  { id: 23, name: "Step Back Lunges", difficulty: "Beginner", category: ["Strength"], goal: ["strength"], routine: "10 each leg x 3", time: 135, image: "", description: "A controlled lunge variation that improves balance and strength." },
  { id: 24, name: "Frog Jumps", difficulty: "Advanced", category: ["Speed","Strength"], goal: ["power"], routine: "8 reps x 4", time: 120, image: "", description: "A powerful jump exercise that builds explosive strength." },
  { id: 25, name: "Plank Shoulder Taps", difficulty: "Intermediate", category: ["Core","Full Body"], goal: ["core strength"], routine: "20 taps x 3", time: 90, image: "", description: "A plank variation that challenges balance and core control." },
  { id: 26, name: "Marching in Place", difficulty: "Beginner", category: ["Cardio"], goal: ["endurance"], routine: "30 sec x 3", time: 90, image: "", description: "A light cardio movement suitable for warming up." },
  { id: 27, name: "Standing Side Bends", difficulty: "Beginner", category: ["Core","Mobility"], goal: ["core strength","mobility"], routine: "12 each side x 3", time: 120, image: "", description: "A movement that stretches and strengthens the obliques." },
  { id: 28, name: "Broad Jumps", difficulty: "Advanced", category: ["Speed","Full Body"], goal: ["power"], routine: "6 reps x 4", time: 120, image: "", description: "A forward jump that builds lower-body power." },
  { id: 29, name: "Wall Push-Ups", difficulty: "Beginner", category: ["Strength"], goal: ["strength"], routine: "12 reps x 3", time: 120, image: "", description: "A beginner-friendly push-up variation using a wall." },
  { id: 30, name: "Balance Hold (One Leg)", difficulty: "Beginner", category: ["Core","Mobility"], goal: ["core strength","mobility"], routine: "30 sec each leg", time: 60, image: "", description: "A balance exercise that improves stability and coordination." },
  { id: 31, name: "Sit-Ups", difficulty: "Intermediate", category: ["Core","Endurance"], goal: ["core strength"], routine: "12-15 reps x 3", time: 120, image: "", description: "A classic abdominal exercise for building core strength." },
  { id: 32, name: "Russian Twists", difficulty: "Intermediate", category: ["Core"], goal: ["core strength","fat loss"], routine: "20 twists x 3", time: 120, image: "", description: "A rotational core exercise targeting the obliques." }
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
  // Render all drills initially
  renderDrills(filteredDrills);
  console.log("App initialized");
}



// RENDERING FUNCTIONS

// Renders all drill cards to the DOM
function renderDrills(drillList) {
  // Clear container
  drillContainer.innerHTML = "";
  
  //if the list is empty, no drills will be showen
  if (drillList.length == 0) {
    drillContainer.textContent = "No drills found. Please search again or reset/change filters";
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
  difficulty.classList.add("difficulty");
  
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


// ===============================
// FILTERING FUNCTIONS
// ===============================

// Filters drills based on activeFilters
function applyFilters() {
  // Filter allDrills based on difficulty/category/goal
  // Update filteredDrills
  // Re-render drills
}


// Handles difficulty filter change
function filterByDifficulty(level) {
  // Update activeFilters
  // Call applyFilters()
}


// Handles category filter change
function filterByCategory(category) {
  // Update activeFilters
  // Call applyFilters()
}


// Handles goal filter change
function filterByGoal(goal) {
  // Update activeFilters
  // Call applyFilters()
}


// Resets all filters
function resetFilters() {
  // Clear activeFilters
  // Reset filteredDrills
  // Re-render drills
}


// ===============================
// SEARCH FUNCTIONALITY
// ===============================

// Searches drills by name or keyword
function searchDrills(query) {
  // Filter drills based on text input
  // Update filteredDrills
  // Re-render
}


// ===============================
// SORTING FUNCTIONALITY
// ===============================

// Sort drills (e.g., by difficulty or time)
function sortDrills(criteria) {
  // Sort filteredDrills based on criteria
  // Re-render
}


// ===============================
// EVENT LISTENERS
// ===============================

// Attach all event listeners
function setupEventListeners() {
  // Buttons (filters, reset)
  // Search input
  // Dropdowns
}


// ===============================
// PHASE 3 (OPTION 1 IDEAS)
// ===============================

// Generates a workout plan based on filters
function generateWorkoutPlan() {
  // Select drills based on user preferences
  // Combine into a routine
}


// Calculates total workout time
function calculateTotalTime(drillList) {
  // Sum time values
  // Return total
}


// Displays workout plan to user
function renderWorkoutPlan(plan) {
  // Show selected drills in a separate section
}


// ===============================
// START APP
// ===============================

initApp();




// /**
//  * Data Catalog Project Starter Code - SEA Stage 2
//  *
//  * This file is where you should be doing most of your work. You should
//  * also make changes to the HTML and CSS files, but we want you to prioritize
//  * demonstrating your understanding of data structures, and you'll do that
//  * with the JavaScript code you write in this file.
//  *
//  * The comments in this file are only to help you learn how the starter code
//  * works. The instructions for the project are in the README. That said, here
//  * are the three things you should do first to learn about the starter code:
//  * - 1 - Change something small in index.html or style.css, then reload your
//  *    browser and make sure you can see that change.
//  * - 2 - On your browser, right click anywhere on the page and select
//  *    "Inspect" to open the browser developer tools. Then, go to the "console"
//  *    tab in the new window that opened up. This console is where you will see
//  *    JavaScript errors and logs, which is extremely helpful for debugging.
//  *    (These instructions assume you're using Chrome, opening developer tools
//  *    may be different on other browsers. We suggest using Chrome.)
//  * - 3 - Add another string to the titles array a few lines down. Reload your
//  *    browser and observe what happens. You should see a fourth "card" appear
//  *    with the string you added to the array, but a broken image.
//  *
//  */

// const FRESH_PRINCE_URL =
//   "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL =
//   "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL =
//   "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// // This is an array of strings (TV show titles)
// let titles = [
//   "Fresh Prince of Bel Air",
//   "Curb Your Enthusiasm",
//   "East Los High",
// ];
// // Your final submission should have much more data than this, and
// // you should use more than just an array of strings to store it all.

// // This function adds cards the page to display the data in the array
// function showCards() {
//   const cardContainer = document.getElementById("card-container");
//   cardContainer.innerHTML = "";
//   const templateCard = document.querySelector(".card");

//   for (let i = 0; i < titles.length; i++) {
//     let title = titles[i];

//     // This part of the code doesn't scale very well! After you add your
//     // own data, you'll need to do something totally different here.
//     let imageURL = "";
//     if (i == 0) {
//       imageURL = FRESH_PRINCE_URL;
//     } else if (i == 1) {
//       imageURL = CURB_POSTER_URL;
//     } else if (i == 2) {
//       imageURL = EAST_LOS_HIGH_POSTER_URL;
//     }

//     const nextCard = templateCard.cloneNode(true); // Copy the template card
//     editCardContent(nextCard, title, imageURL); // Edit title and image
//     cardContainer.appendChild(nextCard); // Add new card to the container
//   }
// }

// function editCardContent(card, newTitle, newImageURL) {
//   card.style.display = "block";

//   const cardHeader = card.querySelector("h2");
//   cardHeader.textContent = newTitle;

//   const cardImage = card.querySelector("img");
//   cardImage.src = newImageURL;
//   cardImage.alt = newTitle + " Poster";

//   // You can use console.log to help you debug!
//   // View the output by right clicking on your website,
//   // select "Inspect", then click on the "Console" tab
//   console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//   console.log("Button Clicked!");
//   alert(
//     "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
//   );
// }

// function removeLastCard() {
//   titles.pop(); // Remove last item in titles array
//   showCards(); // Call showCards again to refresh
// }
