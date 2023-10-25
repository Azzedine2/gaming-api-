import { domFiller } from "./domFiller-function.js";
import { clickSend } from "./clickSend.js";
import { key } from "./apiKey.js";
import { recommendation } from "./recommendation.js";
import { domFillerForSearch } from "./domFiller-function.js";
import { recoForSearchGame } from "./recommendation.js";

// Search Game with Dom Filler and Click Send
function searchGame() {
  // DOM Elements
  const submitButton = document.querySelector(".submit");

  // Listener with Dom and Try/Catch Fetch
  submitButton.addEventListener("click", async function (e) {
    e.preventDefault();
    const searchTerm = document.querySelector("#search").value;
    console.log("search term: ", searchTerm);

    // Search Page Api Call
    const urlGameBySearch = `https://www.giantbomb.com/api/search/?api_key=${key}&format=json&query=${searchTerm}`;

    // Try / Catch Fetch
    try {
      const res = await fetch(urlGameBySearch);
      const json = await res.json();
      const gameData = json;
      //   const gameData = json.results[0]; For Old Version

      // Checker
      console.log("Résultat de Search By Game:", gameData);

      // Function Call: Dom Filler for Search and Recommendation
      domFillerForSearch(gameData);
      recoForSearchGame(gameData);

      // ****************************************Old Version*******************************************************/
      //   const gameSearchId = gameData.id;
      //   const gameUrl = `https://www.giantbomb.com/api/game/${gameData}/?api_key=${key}&format=json`;
      //   const urlGameId = `https://www.giantbomb.com/api/game/3030-${gameSearchId}/?api_key=${key}&format=json`;
      //   domFiller(gameData);
      //   try {
      //     const res = await fetch(urlGameId);
      //     const json = await res.json();
      //     console.log("Résultat de Search By Game 2:", json);
      //     domFiller(json);
      //   } catch (error) {
      //     console.log("error from search Game Function: ", error);
      //   }
      //******************************************************************************************************** */
    } catch (error) {
      console.log("error from search Game Function: ", error);
    }
  });

  clickSend();
}

export { searchGame };
