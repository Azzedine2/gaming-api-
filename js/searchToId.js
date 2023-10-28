// Import
import { fetchGameSearch } from "./api-call.js";
import { clickSend } from "./clickSend.js";
import { addHiddenClass, RmvHiddenClass } from "./hiddenCss.js";
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
      if (Array.isArray(gameSearchResults)) {
        // Hidden the Empty Elements
        const boxArt = document.querySelector(".card-boxart");
        addHiddenClass(boxArt);

        const year = document.querySelector("#year");
        addHiddenClass(year);

        const recommendationBox = document.querySelector(".recommendations");
        addHiddenClass(recommendationBox);

        // For Loop
        const gameDescription = document.querySelector("#description");
        gameDescription.innerHTML = "";
        for (let i = 0; i < gameSearchResults.length; i++) {
          // Ajoutez un gestionnaire d'événements au lien
          const name = gameSearchResults[i].name;
          const resourceType = gameSearchResults[i].resource_type;
          const gameId = gameSearchResults[i].id;

          // A Element Creation for Links to Be Shown
          const gameLink = document.createElement("a");
          gameLink.href = "#"; // Lien vide pour éviter la navigation
          gameLink.innerHTML = `
          <h1>${name}</h1>
          <span>${resourceType}</span>
          `;
          gameLink.style.fontSize = "0.6rem";
          gameLink.style.color = "black";
          gameLink.style.transition = "color 0.2s ease-in-out";

          // Mouse Over and Out for the Links
          gameLink.addEventListener("mouseover", () => {
            gameLink.style.color = "white";
          });
          gameLink.addEventListener("mouseout", () => {
            gameLink.style.color = "black";
          });
          console.log("game link", gameLink);

          // On Click DomFiller, Reco And Visibility Changer
          gameLink.addEventListener("click", async (e) => {
            e.preventDefault(); // Empêche la navigation par défaut
            const gameNameSearchResult = await fetchGameSearch(name);
            console.log("fetching gamelink", gameNameSearchResult);
            domFillerForSearch(gameNameSearchResult);
            RmvHiddenClass(boxArt);
            RmvHiddenClass(recommendationBox);
            if (year.innerHTML !== "undefined") {
              RmvHiddenClass(year);
            }

            // Recommendation not Hiding after First search Solution ?

            addHiddenClass(recommendationBox);

            console.log(domFillerForSearch(gameNameSearchResult) !== true);
            console.log(domFillerForSearch(gameNameSearchResult));

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
