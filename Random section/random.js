// Import Function
import { RandomGameGeneratorGuid } from "../js/RandomGameGeneratorGuid.js";
import { recommendation } from "../js/recommendation.js";
import { searchGame } from "../js/searchFunction.js";
import { initializeSearch } from "../js/initializeSearch.js";

// console.log(await fetchGame);

// Async Game Loader Function
async function loadRandomGame() {
  try {
    // Function Calls: Random Call with History Adder and Recommendation
    RandomGameGeneratorGuid();
    searchGame();
    recommendation();

    // Confirmation / Checker
    console.log("Load Game success");
  } catch (error) {
    console.log(error);
  }
}
loadRandomGame();

// initializeSearch();
