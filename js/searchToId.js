// Import
import { key } from "./apiKey.js";
import { fetchGameSearch } from "./api-call.js";
import { clickSend } from "./clickSend.js";
import { fetchDefineGame } from "./api-call.js";
import { domFiller, domFillerForSearch } from "./domFiller-function.js";

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
      const gameArray = document.querySelector("main");
      if (Array.isArray(gameSearchResults)) {
        // gameArray.innerHTML = "";

        // For Loop
        for (let i = 0; i < gameSearchResults.length; i++) {
            const name = gameSearchResults[i].name;
            const gameId = gameSearchResults[i].id;
          
            // Créez un lien qui appelle domFiller avec l'ID du jeu
            const gameLink = document.createElement("a");
            gameLink.href = "#"; // Lien vide pour éviter la navigation
            gameLink.innerHTML = `<h1>${name}</h1>`;
            console.log("game link", gameLink)
          
            // Ajoutez un gestionnaire d'événements au lien
            gameLink.addEventListener("click", async (e) => {
              e.preventDefault(); // Empêche la navigation par défaut
               const gameNameSearchResult = await fetchGameSearch(name); 
               console.log("fetching gamelink", gameNameSearchResult)
               domFillerForSearch(gameNameSearchResult)// Vous pouvez passer l'ID du jeu à la fonction de domFiller
            });
          
            // Ajoutez le lien au conteneur principal (gameArray)
            gameArray.appendChild(gameLink);
          }
      }
    } catch (error) {
      console.log("error from search To ID: ", error);
    }
  });
}

export { searchToId };
