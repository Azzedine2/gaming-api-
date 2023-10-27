// Import
import { fetchGameSearch } from "./api-call.js";
import { clickSend } from "./clickSend.js";
import { domFiller, domFillerForSearch } from "./domFiller-function.js";
import { key } from "./apiKey.js";
import { fetchDefineGame } from "./api-call.js";
import { recoForSearchGame } from "./recommendation.js";

async function searchToId() {
  // DOM Elements
  const submitButton = document.querySelector(".submit");

  // Listener with Dom and Try/Catch Fetch
  clickSend();
  submitButton.addEventListener("click", async function (e) {
    e.preventDefault();
    const searchTerm = document.querySelector("#search").value;

    console.log("Search Term: ", searchTerm);
    try {
      const json = await fetchGameSearch(searchTerm);
      const gameSearchResults = json.results;

      //   domFillerForSearch(gameSearchResults);
      console.log("Game Data: ", gameSearchResults);

      // Condition Test
      const gameDescription = document.querySelector("#description");
      if (Array.isArray(gameSearchResults)) {
        // For Loop
        gameDescription.innerHTML = "";
        for (let i = 0; i < gameSearchResults.length; i++) {
          // Ajoutez un gestionnaire d'événements au lien
          const name = gameSearchResults[i].name;
          const gameId = gameSearchResults[i].id;

          // Créez un lien qui appelle domFiller avec l'ID du jeu
          const gameLink = document.createElement("a");
          gameLink.href = "#"; // Lien vide pour éviter la navigation
          gameLink.innerHTML = `<h1>${name}</h1>`;
          gameLink.style.fontSize = "0.6rem";
          gameLink.style.color = "black";
          console.log("game link", gameLink);

          gameLink.addEventListener("click", async (e) => {
            e.preventDefault(); // Empêche la navigation par défaut
            const gameNameSearchResult = await fetchGameSearch(name);
            console.log("fetching gamelink", gameNameSearchResult);
            domFillerForSearch(gameNameSearchResult);
            //    recoForSearchGame(gameNameSearchResult)
          });

          // Ajoutez le lien au conteneur principal (gameDescription)
          gameDescription.append(gameLink);
        }
      }
    } catch (error) {
      console.log("error from search To ID: ", error);
    }
  });
}

export { searchToId };
