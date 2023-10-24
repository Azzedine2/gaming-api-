// Import
import { searchGame } from "./searchFunction.js";
import { recommendation } from "./recommendations.js";
import { addToHistory } from "./addToHistory.js";
import { clickSend } from "./clickSend.js";
import { domFiller } from "./domFiller-function.js";

// Initialize Search with Search Game, Add to History and Recommendation
function initializeSearch() {
  // DOM Elements
  const submitButton = document.querySelector(".submit");
  const gameAll = document.querySelector(".game-all");

  // Function Call with Onclick Condition
  searchGame();
  submitButton.onclick = () => {
    gameAll.style.visibility = "visible";
    addToHistory();
    recommendation();
  };

  addToHistory();
}

export { initializeSearch };
