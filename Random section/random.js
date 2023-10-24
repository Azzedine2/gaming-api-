// Import Function
import { RandomGameGeneratorGuid } from "../js/guid-randomizer.js";
import { recommendation } from "../js/recommendations.js";
import { searchGame } from "../js/searchFunction.js";

// console.log(await fetchGame);

// Async Game Loader Function
async function loadRandomGame() {
  try {
    // Function Calls: Random Call with History Adder and Recommendation
    RandomGameGeneratorGuid();
    recommendation();
    searchGame();

    // Confirmation / Checker
    console.log("Load Game success");
  } catch (error) {
    console.log(error);
  }
}
loadRandomGame();
