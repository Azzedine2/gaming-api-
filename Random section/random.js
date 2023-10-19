// Import Function
import { fetchGame, fetchGameAll } from "../js/api-call.js";

// console.log(await fetchGame);

// DOM Grabber
const bgImg = document.querySelector(".bg-image");
const gameTitle = document.querySelector("#game-title");
const artBox = document.querySelector("#main-img");
const description = document.querySelector("#description");
const year = document.querySelector("#year");

// Async Game Loader Function
async function loadGame() {
  try {
    // Function Call
    // RandomGameGeneratorAll();
    RandomGameGeneratorGuid();

    // Confirmation / Checker
    console.log("Load Game success");
  } catch (error) {
    console.log(error);
  }
}
loadGame();

// Random GameAll info Generator
async function RandomGameGeneratorAll() {
  // Fetch Game All Into Variable
  const gameData = await fetchGameAll();

  // Random Index Formula to Variable
  const randomGameIndex = Math.floor(Math.random() * gameData.results.length);
  const randomGameIndexForGuidSearch = Math.floor(Math.random() * 80000);

  // Content Url to Variable
  const bgImageUrl = gameData.results[randomGameIndex].image.screen_large_url;
  const titleUrl = gameData.results[randomGameIndex].name;
  const artBoxUrl = gameData.results[randomGameIndex].image.medium_url;
  const descriptionUrl = gameData.results[randomGameIndex].deck;
  // const originalDateUrl = gameData.results[randomGameIndex].original_release_date
  // const yearUrl = gameData.results[randomGameIndex].expected_release_year

  // Release Date if Statement
  let yearUrl;
  if (gameData.results[randomGameIndex].expected_release_year !== null) {
    yearUrl = gameData.results[randomGameIndex].expected_release_year;
  } else {
    yearUrl = gameData.results[randomGameIndex].original_release_date;
  }

  // API Infos To innerHtml Dom
  bgImg.src = bgImageUrl;
  gameTitle.innerHTML = titleUrl;
  artBox.src = artBoxUrl;
  description.innerHTML = descriptionUrl;
  year.innerHTML = yearUrl;

  // Similar Games
  // Dom Variable for Recommendation
  const recommendationCard = document.querySelector(
    ".recommendation-title .card"
  );

  // Similar Game Variable
  // const similarGame = fetchGameAll.results.similarGame;

  // Checker
  console.log(yearUrl);
}

// // Random Game Guid info Generator
async function RandomGameGeneratorGuid() {
  // Fetch Game All Into Variable
  const gameData = await fetchGame();

  // Random Index Formula to Variable
  // const randomGameIndex = Math.floor(Math.random() * gameData.results.length);
  // const randomGameIndexForGuidSearch = Math.floor(Math.random() * 80000);

  // Content Url to Variable
  const bgImageUrl = gameData.results.image.screen_large_url;
  const titleUrl = gameData.results.name;
  const artBoxUrl = gameData.results.image.medium_url;
  const descriptionUrl = gameData.results.deck;
  // const originalDateUrl = gameData.results.original_release_date
  // const yearUrl = gameData.results.expected_release_year

  // Release Date if Statement
  let yearUrl;
  if (gameData.results.expected_release_year !== null) {
    yearUrl = gameData.results.expected_release_year;
  } else {
    yearUrl = gameData.results.original_release_date;
  }

  // API Infos To innerHtml Dom
  bgImg.src = bgImageUrl;
  gameTitle.innerHTML = titleUrl;
  artBox.src = artBoxUrl;
  description.innerHTML = descriptionUrl;
  year.innerHTML = yearUrl;

  // WIP Similar Games 
  // Dom Variable for Recommendation
  const recommendationCard = document.querySelector(
    ".recommendation-title .card"
  );

  // Similar Game Variable
  const similarGame = gameData.results.similar_games;

  // Checker
  console.log("similar", similarGame);
}

// WIP Recommendations
async function recommendation() {
  // Fetch Game All Into Variable
  const gameData = await fetchGameAll();
  console.log(gameData);
}
