// Import
import { searchGame } from "./BackUp/searchFunction.js";
import { recommendation } from "./recommendation.js";
import { addToHistory } from "./addToHistory.js";
import { searchToId } from "./searchToId.js";
import { clickSend } from "./clickSend.js";
import { domFiller } from "./domFiller-function.js";

// Initialize Search with Search Game, Add to History and Recommendation
function initializeSearch() {
  // DOM Elements
  const submitButton = document.querySelector(".submit");
  const gameAll = document.querySelector(".game-all");

  // Function Call with Onclick Condition
  searchToId();
  submitButton.onclick = () => {
    gameAll.style.visibility = "visible";
    addToHistory();
    recommendation();
  };

  addToHistory();
}

export { initializeSearch };
