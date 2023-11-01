// Import Function
import { fetchGameSpecifiq } from "../js/api-call.js";
import { recommendation } from "../js/recommendation.js";
import { searchGame } from "../js/BackUp/searchFunction.js";
import { addToHistory } from "../js/addToHistory.js";
import { initializeSearch } from "../js/initializeSearch.js";

// console.log(await fetchGameSpecifiq);

// DOM
const bgImg = document.querySelector(".bg-image");

// Async Game Loader Function
async function loadGame() {
  try {
    const gameData = await fetchGameSpecifiq();
    const imageUrl = gameData.results.image.screen_large_url;
    bgImg.src = imageUrl;
    console.log("About Page Wallpaper Load Success: ", imageUrl);

    // Function Calls for Reco, Search and History
    recommendation();
    searchGame();
    addToHistory();
  } catch (error) {
    console.log(error);
  }
}
loadGame();

// initializeSearch();
