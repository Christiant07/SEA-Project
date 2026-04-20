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
  {
    id: 1,
    name: "Jumping Jacks",
    difficulty: "Beginner",
    category: ["Cardio", "Endurance"],
    skill: ["coordination", "rhythm"],
    goal: ["fat loss", "endurance"],
    routine: "30 sec x 3",
    time: 30
  },
  {
    id: 2,
    name: "Push-Ups",
    difficulty: "Intermediate",
    category: ["Strength", "Full Body"],
    skill: ["upper body", "core stability"],
    goal: ["strength"],
    routine: "10-15 reps x 3",
    time: 45
  },
  {
    id: 3,
    name: "Bodyweight Squats",
    difficulty: "Beginner",
    category: ["Strength"],
    skill: ["leg strength", "balance"],
    goal: ["strength", "endurance"],
    routine: "15 reps x 3",
    time: 45
  },
  {
    id: 4,
    name: "Plank",
    difficulty: "Beginner",
    category: ["Core", "Endurance"],
    skill: ["core stability", "control"],
    goal: ["core strength"],
    routine: "30-60 sec x 3",
    time: 45
  },
  {
    id: 5,
    name: "Mountain Climbers",
    difficulty: "Intermediate",
    category: ["Cardio", "Core"],
    skill: ["speed", "core control"],
    goal: ["fat loss", "endurance"],
    routine: "30 sec x 4",
    time: 30
  },
  {
    id: 6,
    name: "Burpees",
    difficulty: "Advanced",
    category: ["Cardio", "Full Body", "Speed"],
    skill: ["explosiveness"],
    goal: ["fat loss", "power"],
    routine: "10 reps x 4",
    time: 45
  },
  {
    id: 7,
    name: "Lunges",
    difficulty: "Beginner",
    category: ["Strength"],
    skill: ["balance", "leg control"],
    goal: ["strength"],
    routine: "10 each leg x 3",
    time: 45
  },
  {
    id: 8,
    name: "High Knees",
    difficulty: "Beginner",
    category: ["Cardio", "Speed"],
    skill: ["quickness", "coordination"],
    goal: ["endurance", "fat loss"],
    routine: "30 sec x 4",
    time: 30
  },
  {
    id: 9,
    name: "Wall Sit",
    difficulty: "Intermediate",
    category: ["Endurance", "Strength"],
    skill: ["leg endurance"],
    goal: ["endurance"],
    routine: "45 sec x 3",
    time: 45
  },
  {
    id: 10,
    name: "Bear Crawl",
    difficulty: "Advanced",
    category: ["Full Body", "Core"],
    skill: ["coordination", "strength"],
    goal: ["endurance", "mobility"],
    routine: "20 sec x 4",
    time: 20
  },
  {
    id: 11,
    name: "Arm Circles",
    difficulty: "Beginner",
    category: ["Mobility"],
    skill: ["shoulder mobility"],
    goal: ["mobility"],
    routine: "30 sec each direction",
    time: 30
  },
  {
    id: 12,
    name: "Butt Kicks",
    difficulty: "Beginner",
    category: ["Cardio"],
    skill: ["coordination"],
    goal: ["endurance"],
    routine: "30 sec x 4",
    time: 30
  },
  {
    id: 13,
    name: "Standing Toe Touches",
    difficulty: "Beginner",
    category: ["Mobility", "Core"],
    skill: ["flexibility"],
    goal: ["mobility"],
    routine: "15 reps x 3",
    time: 40
  },
  {
    id: 14,
    name: "Side Lunges",
    difficulty: "Intermediate",
    category: ["Strength", "Mobility"],
    skill: ["leg strength"],
    goal: ["strength", "mobility"],
    routine: "10 each side x 3",
    time: 45
  },
  {
    id: 15,
    name: "Skater Jumps",
    difficulty: "Intermediate",
    category: ["Cardio", "Speed"],
    skill: ["balance"],
    goal: ["fat loss", "power"],
    routine: "20 sec x 4",
    time: 20
  },
  {
    id: 16,
    name: "Inchworm Walkout",
    difficulty: "Intermediate",
    category: ["Full Body", "Mobility"],
    skill: ["flexibility"],
    goal: ["mobility"],
    routine: "8 reps x 3",
    time: 40
  },
  {
    id: 17,
    name: "Tuck Jumps",
    difficulty: "Advanced",
    category: ["Speed", "Cardio"],
    skill: ["explosiveness"],
    goal: ["power", "fat loss"],
    routine: "6-8 reps x 4",
    time: 30
  },
  {
    id: 18,
    name: "Superman Hold",
    difficulty: "Beginner",
    category: ["Core"],
    skill: ["lower back strength"],
    goal: ["core strength"],
    routine: "30 sec x 3",
    time: 30
  },
  {
    id: 19,
    name: "Reverse Crunches",
    difficulty: "Intermediate",
    category: ["Core"],
    skill: ["lower abs"],
    goal: ["core strength"],
    routine: "12 reps x 3",
    time: 40
  },
  {
    id: 20,
    name: "Standing Calf Raises",
    difficulty: "Beginner",
    category: ["Strength"],
    skill: ["calf strength"],
    goal: ["strength"],
    routine: "20 reps x 3",
    time: 40
  },
  {
    id: 21,
    name: "Fast Feet",
    difficulty: "Intermediate",
    category: ["Speed", "Cardio"],
    skill: ["agility"],
    goal: ["speed", "endurance"],
    routine: "20 sec x 5",
    time: 20
  },
  {
    id: 22,
    name: "Side Plank",
    difficulty: "Intermediate",
    category: ["Core", "Endurance"],
    skill: ["core stability"],
    goal: ["core strength"],
    routine: "30 sec each side",
    time: 30
  },
  {
    id: 23,
    name: "Step Back Lunges",
    difficulty: "Beginner",
    category: ["Strength"],
    skill: ["balance"],
    goal: ["strength"],
    routine: "10 each leg x 3",
    time: 45
  },
  {
    id: 24,
    name: "Frog Jumps",
    difficulty: "Advanced",
    category: ["Speed", "Strength"],
    skill: ["explosiveness"],
    goal: ["power"],
    routine: "8 reps x 4",
    time: 30
  },
  {
    id: 25,
    name: "Plank Shoulder Taps",
    difficulty: "Intermediate",
    category: ["Core", "Full Body"],
    skill: ["core control"],
    goal: ["core strength"],
    routine: "20 taps x 3",
    time: 30
  },
  {
    id: 26,
    name: "Marching in Place",
    difficulty: "Beginner",
    category: ["Cardio"],
    skill: ["coordination"],
    goal: ["endurance"],
    routine: "30 sec x 3",
    time: 30
  },
  {
    id: 27,
    name: "Standing Side Bends",
    difficulty: "Beginner",
    category: ["Core", "Mobility"],
    skill: ["flexibility"],
    goal: ["core strength", "mobility"],
    routine: "12 each side x 3",
    time: 40
  },
  {
    id: 28,
    name: "Broad Jumps",
    difficulty: "Advanced",
    category: ["Speed", "Full Body"],
    skill: ["explosiveness"],
    goal: ["power"],
    routine: "6 reps x 4",
    time: 30
  },
  {
    id: 29,
    name: "Wall Push-Ups",
    difficulty: "Beginner",
    category: ["Strength"],
    skill: ["upper body"],
    goal: ["strength"],
    routine: "12 reps x 3",
    time: 40
  },
  {
    id: 30,
    name: "Balance Hold (One Leg)",
    difficulty: "Beginner",
    category: ["Core", "Mobility"],
    skill: ["balance"],
    goal: ["core strength", "mobility"],
    routine: "30 sec each leg",
    time: 30
  },
  {
    id: 31,
    name: "Sit-Ups",
    difficulty: "Intermediate",
    category: ["Core", "Endurance"],
    skill: ["abdominal strength"],
    goal: ["core strength"],
    routine: "12-15 reps x 3",
    time: 40
  },
  {
    id: 32,
    name: "Russian Twists",
    difficulty: "Intermediate",
    category: ["Core"],
    skill: ["obliques"],
    goal: ["core strength", "fat loss"],
    routine: "20 twists x 3",
    time: 40
  }
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];

    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
    let imageURL = "";
    if (i == 0) {
      imageURL = FRESH_PRINCE_URL;
    } else if (i == 1) {
      imageURL = CURB_POSTER_URL;
    } else if (i == 2) {
      imageURL = EAST_LOS_HIGH_POSTER_URL;
    }

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, imageURL); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}




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
