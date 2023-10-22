// Imports
import { fetchGameSearch } from "./api-call.js";
import { recommendation } from "./recommendations.js";

console.log(fetchGameSearch);

// API Key
const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// DOM Elements
const searchTerm = document.querySelector("#search").value;

async function searchGame() {
  try {
    // Function Call
    // fetchGameSearch();
    // recommendation();

    // New test
    // Call by Searches Needs

    // Search Page Api Call
    const urlGameBySearch = `https://www.giantbomb.com/api/search/?api_key=${key}&format=json&query=${searchTerm}`;

    // Confirmation / Checker
    console.log("Load Game success");
  } catch (error) {
    console.log("error:", error);
  }
}

export { searchGame };
