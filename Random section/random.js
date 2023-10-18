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
    RandomGameGenerator();

    // Confirmation / Checker
    console.log("Load Game success");
  } catch (error) {
    console.log(error);
  }
}
loadGame();

// Random Game info Generator
async function RandomGameGenerator() {
  // Fetch Game All Into Variable
  const gameData = await fetchGameAll();
  console.log(gameData);

  // Random Index Formula to Variable
  const randomGameIndex = Math.floor(Math.random() * gameData.results.length);

  // Content Url to Variable
  const bgImageUrl = gameData.results[randomGameIndex].image.screen_large_url;
  const titleUrl = gameData.results[randomGameIndex].name;
  const artBoxUrl = gameData.results[randomGameIndex].image.medium_url;
  const descriptionUrl = gameData.results[randomGameIndex].deck;
  // const originalDateUrl = gameData.results[randomGameIndex].original_release_date
  // const yearUrl = gameData.results[randomGameIndex].expected_release_year

  let yearUrl;
  if (gameData.results[randomGameIndex].expected_release_year !== null) {
    yearUrl = gameData.results[randomGameIndex].expected_release_year;
  } else {
    yearUrl = gameData.results[randomGameIndex].original_release_date;
  }

  // API Info To innerHtml Dom
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
  const similarGame = fetchGameAll.results.similarGame;

  // Checker
  console.log(yearUrl);
}

async function recommendation() {
  // Fetch Game All Into Variable
  const gameData = await fetchGameAll();
  console.log(gameData);
}
