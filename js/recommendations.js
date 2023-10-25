import { fetchGame } from "./api-call.js";
import { RandomGameGeneratorGuid } from "./RandomGameGeneratorGuid.js";
import { key } from "./apiKey.js";
import { searchGame } from "./searchFunction.js";

// WIP Function Recommendations / Similar games
async function recommendation() {
  // Fetch Game All Into Variable
  const gameData = await fetchGame();
  console.log("Game Data log:", gameData);

  // Dom Variable for Recommendation
  const recommendationCard = document.querySelectorAll(
    ".recommendations .card"
  );

  const recoTitleTest = document.querySelector(".recommendation-title");

  // Similar Game Variable
  const similarGame = gameData.results.similar_games;

  // Checker
  console.log("Similar games:", similarGame);

  if (similarGame === null) {
    // Error Message and Hidden if no Similar Games Found
    recoTitleTest.innerHTML = "No similar games";
    recommendationCard.forEach((card) => {
      card.style.visibility = "hidden";
    });
    console.log("No similar games");

    return;
  }

  //   recoTitleTest.innerHTML = similarGame[Math.floor(Math.random() * 4)]?.id;
  //   recommendationCard.innerHTML = similarGame[Math.floor(Math.random() * 4)]?.id;

  // Promises. all Test *****************************************************************
  // Array to store Promises
  const recommendationPromises = similarGame.slice(0, 5).map((game, index) => {
    return fetchSemilarGameDetails(game.id, recommendationCard[index]);
  });

  // Execute Promises
  await Promise.all(recommendationPromises);

  async function fetchSemilarGameDetails(gameId, card) {
    const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-${gameId}/?api_key=${key}&format=json`;

    try {
      const res = await fetch(urlGameByGuid);
      const json = await res.json();

      // Checker
      console.log(json.results.image.medium_url);

      // Adding to the card
      card.style.backgroundImage = `url(${json.results.image.medium_url})`;
      card.style.backgroundSize = "cover";
      // ************************
      recoSearch(gameId);
      //*********************** */
      // Checker
      console.log();
    } catch (error) {
      console.log("Error from Recommendation Catch:", error);
    }
  }

  //********************************************************************** */
}

export { recommendation };

// Notes to try links within reco
// .site_url_details
// createEl => a
// card.href = `https://www.giantbomb.com/api/game/3030-${gameId}`

// function recommendationLink() {
//   j
// }

async function recoSearch(gameId) {
  // Utilisez gameId pour afficher les informations du jeu associé
  const urlGameId = `https://www.giantbomb.com/api/game/3030-${gameId}/?api_key=${key}&format=json`;
  try {
    const res = await fetch(urlGameId);
    const json = await res.json();

    console.log("Résultat de Search By Game 2:", json);
    card.onclick = () {

      domFiller(json);
      recommendation();
    }
  } catch (error) {
    console.log("error from search Game Function: ", error);
  }
}
