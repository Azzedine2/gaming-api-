// Import Function
import { RandomGameGeneratorGuid } from "../js/guid-randomizer.js";
import { recommendation } from "../js/recommendations.js";

// console.log(await fetchGame);

// Async Game Loader Function
async function loadGame() {
  try {
    // Function Calls: Random Call with History Adder and Recommendation
    RandomGameGeneratorGuid();
    recommendation();

    // Confirmation / Checker
    console.log("Load Game success");
  } catch (error) {
    console.log(error);
  }
}
loadGame();
