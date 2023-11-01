// Import
import { recommendation } from "./recommendation.js";
import { searchToId } from "./searchToId.js";
import { addToHistory } from "./addToHistory.js";
import { addHiddenClass, RmvHiddenClass } from "./hiddenCss.js";
import { searchGame } from "./BackUp/searchFunction.js";
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
    // gameAll.style.visibility = "visible";
    RmvHiddenClass(gameAll)
    // addToHistory();
  };

  // addToHistory();
}

export { initializeSearch };
