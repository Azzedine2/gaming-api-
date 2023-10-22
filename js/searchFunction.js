// Imports
import { fetchGameSearch } from "./api-call.js";
import { recommendation } from "./recommendations.js";

console.log(fetchGameSearch);

async function searchGame() {
  try {
    // Function Call
    fetchGameSearch();
    recommendation();

    // Confirmation / Checker
    console.log("Load Game success");
  } catch (error) {
    console.log("error:", error);
  }
}

export { searchGame };
