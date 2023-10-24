import { domFiller } from "./filler-function.js";
import { clickSend } from "./clickSend.js";

function searchGame() {
  // API Key
  const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

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
      const gameDataTry = await res.json();
      const gameData = gameDataTry.results[0];

      // Checker
      console.log("Résultat de Search By Game:", gameData);

      const gameSearchId = gameData.id;

      const gameUrl = `https://www.giantbomb.com/api/game/${gameData}/?api_key=${key}&format=json`;
      const urlGameId = `https://www.giantbomb.com/api/game/3030-${gameSearchId}/?api_key=${key}&format=json`;

      try {
        const res = await fetch(urlGameId);
        const json = await res.json();
        console.log("Résultat de Search By Game 2:", json);
        domFiller(json);
      } catch (error) {
        console.log("error from search Game Function: ", error);
      }
    } catch (error) {
      console.log("error from search Game Function: ", error);
    }
  });

  clickSend();
}

export { searchGame };
