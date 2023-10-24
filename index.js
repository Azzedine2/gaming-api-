// Import
import { searchGame } from "./js/searchFunction.js";
import { recommendation } from "../js/recommendations.js";
import { addToHistory } from "../js/addToHistory.js";

async function initializeSearch() {
  const searchResult = await searchGame();
  const gameAll = document.querySelector(".game-all");

  if (searchResult === true) {
    recommendation();
    addToHistory();
    gameAll.style.visibility = "visible";
  }
  addToHistory();
}

initializeSearch();
