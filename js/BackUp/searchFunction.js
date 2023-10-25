import { domFiller } from "../domFiller-function.js";
import { recommendation } from "../recommendation.js";
import { clickSend } from "../clickSend.js";
import { key } from "../apiKey.js";
import { domFillerForSearch } from "../domFiller-function.js";
import { recoForSearchGame } from "../recommendation.js";

// Search Game with Dom Filler and Click Send
function searchGame() {
  // DOM Elements
  const submitButton = document.querySelector(".submit");

  // Listener with Dom and Try/Catch Fetch
  clickSend();
  submitButton.addEventListener("click", async function (e) {
    e.preventDefault();
    const searchTerm = document.querySelector("#search").value;

    console.log("Search Term: ", searchTerm);

    // Search Page Api Call
    const urlGameBySearch = `https://www.giantbomb.com/api/search/?api_key=${key}&format=json&query=${searchTerm}`;

    // Try / Catch Fetch
    try {
      const res = await fetch(urlGameBySearch);
      const json = await res.json();
      const gameData = json;

      // Checker
      console.log("Résultat de Search By Game:", gameData);

      // Function Call: Dom Filler for Search and Recommendation
      domFillerForSearch(gameData);
      recoForSearchGame(gameData);
      //   recommendation(gameData);
    } catch (error) {
      console.log("error from search Game Function: ", error);
    }
  });
}

export { searchGame };
