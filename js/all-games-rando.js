import { fetchGame, fetchGameAll } from "./api-call";

// DOM Grabber
const bgImg = document.querySelector(".bg-image");
const gameTitle = document.querySelector("#game-title");
const artBox = document.querySelector("#main-img");
const description = document.querySelector("#description");
const year = document.querySelector("#year");

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
  // const recommendationCard = document.querySelector(
  //   ".recommendation-title .card"
  // );

  // Similar Game Variable
  // const similarGame = fetchGameAll.results.similarGame;

  // Checker
  console.log(yearUrl);
}

export { RandomGameGeneratorAll };
