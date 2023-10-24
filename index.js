// Import
import { searchGame } from "./js/searchFunction.js";
import { recommendation } from "../js/recommendations.js";
import { addToHistory } from "../js/addToHistory.js";
import { clickSend } from "./js/clickSend.js";

function initializeSearch() {
  const searchResult = searchGame();
  const gameAll = document.querySelector(".game-all");

  if (clickSend === true) {
    gameAll.style.visibility = "visible";
    addToHistory();
    recommendation();
  }
  addToHistory();
}

initializeSearch();
