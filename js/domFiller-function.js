// Import
import { addToHistory } from "./addToHistory.js";
import { recommendation } from "./recommendation.js";
import { fetchVideo } from "./api-call.js";
import { key } from "./apiKey.js";
import { addToFavorite } from "./WIPaddToFav.js";

// Dom Filler Function with Add History
function domFiller(gameData, clickFromHistory = false) {
  // DOM Grabber
  const bgImg = document.querySelector(".bg-image");
  const gameTitle = document.querySelector("#game-title");
  const artBox = document.querySelector("#main-img");
  const description = document.querySelector("#description");
  const year = document.querySelector("#year");
  const gameApiLink = document.querySelector("#game-api-link");

  // Content Url to Variable
  const bgImageUrl = gameData.results.image.screen_large_url;
  const titleUrl = gameData.results.name;
  const artBoxUrl = gameData.results.image.medium_url;
  const descriptionUrl = gameData.results.deck;
  const gameLink = gameData.results.site_detail_url;

  const gameId = gameData.results.id;

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

  // Add to History artBox Function Call
  if (clickFromHistory === false) {
    addToHistory(artBoxUrl, gameId);
    console.log("click From History dom: ", clickFromHistory);
  }

  addToFavorite(gameId, artBoxUrl);

  gameApiLink.href = gameLink;

  description.innerHTML = descriptionUrl;
  year.innerHTML = yearUrl;

  // recommendation(gameData)
}

export { domFiller };

// Dom Filler Function with Add History
function domFillerForSearch(gameData, clickFromHistory = false) {
  // DOM Grabber
  const bgImg = document.querySelector(".bg-image");
  const gameTitle = document.querySelector("#game-title");
  const artBox = document.querySelector("#main-img");
  const description = document.querySelector("#description");
  const year = document.querySelector("#year");
  const gameApiLink = document.querySelector("#game-api-link");

  // Content Url to Variable
  const bgImageUrl = gameData.results[0].image.screen_large_url;
  const titleUrl = gameData.results[0].name;
  const artBoxUrl = gameData.results[0].image.medium_url;
  const descriptionUrl = gameData.results[0].deck;
  const gameLink = gameData.results[0].site_detail_url;
  const gameId = gameData.results[0].id;

  console.log("game url link :", gameLink);

  // Release Date if Statement
  let yearUrl;
  if (gameData.results[0].expected_release_year !== null) {
    yearUrl = gameData.results[0].expected_release_year;
  } else {
    yearUrl = gameData.results[0].original_release_date;
  }
  console.log("game year :", yearUrl);

  // Not a Game if Statement
  if (yearUrl == null) {
    year.style.visibility = "hidden";
  }

  // API Infos To innerHtml Dom
  bgImg.src = bgImageUrl;
  gameTitle.innerHTML = titleUrl;

  artBox.src = artBoxUrl;

  // Add to History artBox Function Call
  if (clickFromHistory === false) {
    addToHistory(artBoxUrl, gameId);
  }

  gameApiLink.href = gameLink;

  description.innerHTML = descriptionUrl;
  year.innerHTML = yearUrl;
}

export { domFillerForSearch };
