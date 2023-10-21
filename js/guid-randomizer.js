import { fetchGame } from "./api-call.js";

// DOM Grabber
const bgImg = document.querySelector(".bg-image");
const gameTitle = document.querySelector("#game-title");
const artBox = document.querySelector("#main-img");
const description = document.querySelector("#description");
const year = document.querySelector("#year");
const gameApiLink = document.querySelector("#game-api-link")

// Random Game Guid info Generator
async function RandomGameGeneratorGuid() {
  // Fetch Game All Into Variable
  const gameData = await fetchGame();

  // Content Url to Variable
  const bgImageUrl = gameData.results.image.screen_large_url;
  const titleUrl = gameData.results.name;
  const artBoxUrl = gameData.results.image.medium_url;
  const descriptionUrl = gameData.results.deck;
  const gameLink = gameData.results.site_detail_url;

  console.log("game url link :", gameLink);

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
  gameApiLink.href = gameLink;

  description.innerHTML = descriptionUrl;
  year.innerHTML = yearUrl;
}

export { RandomGameGeneratorGuid };

