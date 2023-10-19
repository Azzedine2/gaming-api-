import { fetchGame } from "./api-call.js";

// DOM Grabber
const bgImg = document.querySelector(".bg-image");
const gameTitle = document.querySelector("#game-title");
const artBox = document.querySelector("#main-img");
const description = document.querySelector("#description");
const year = document.querySelector("#year");

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
}

// WIP Recommendations / Similar games
async function recommendation() {
  // Fetch Game All Into Variable
  const gameData = await fetchGame();
  console.log("Game Data log:", gameData);

  // Dom Variable for Recommendation
  const recommendationCard = document.querySelectorAll(
    ".recommendation-title .card"
  );

  // Similar Game Variable
  const similarGame = gameData.results.similar_games;

  // Checker
  console.log("Similar games:", similarGame[similarGame.length -1].name);

  // For each
  recommendationCard.forEach((game, i) => {
    if (i < similarGame.length - 1) {
      const game = similarGame[i];
      recommendationCard.innerHTML = `
      <h2>${game.name}</h2>
      `;
    }
  });
}

export { RandomGameGeneratorGuid, recommendation };
