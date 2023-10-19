// Import Function
import { fetchGame, fetchGameAll } from "../js/api-call.js";
import { RandomGameGeneratorAll } from "../js/all-games-rando.js";
import { RandomGameGeneratorGuid } from "../js/guid-randomizer.js";

// console.log(await fetchGame);

// Async Game Loader Function
async function loadGame() {
  try {
    // Function Call
    // RandomGameGeneratorAll();
    RandomGameGeneratorGuid();

    // Confirmation / Checker
    console.log("Load Game success");
  } catch (error) {
    console.log(error);
  }
}
loadGame();
