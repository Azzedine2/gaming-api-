import { fetchGame } from "./api-call.js";
import { RandomGameGeneratorGuid } from "./guid-randomizer.js";

// API Key
const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// WIP Function Recommendations / Similar games
async function recommendation() {
  // Fetch Game All Into Variable
  const gameData = await fetchGame();
  console.log("Game Data log:", gameData);

  // Dom Variable for Recommendation
  const recommendationCard1 = document.querySelector(".recommendations .card5");

  const recoTitleTest = document.querySelector(".recommendation-title");

  // Similar Game Variable
  const similarGame = gameData.results.similar_games;

  // Checker
  console.log("Similar games:", similarGame);

  if (similarGame === null) {
    // Error Message if no Similar Games
    recoTitleTest.innerHTML = "No similar games";
    console.log("No similar games");

    return;
  }

  //   recoTitleTest.innerHTML = similarGame[Math.floor(Math.random() * 4)]?.id;
  //   recommendationCard.innerHTML = similarGame[Math.floor(Math.random() * 4)]?.id;

  // New Call Based on Similar Game
  const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-${similarGame[0].id}/?api_key=${key}&format=json`;
  try {
    const res = await fetch(urlGameByGuid);
    const json = await res.json();

    // Checker
    console.log(json);
    console.log("Résultat de l'appel Game:", json);
    console.log(json.results.image.medium_url);

    // Adding to Card 1
    recommendationCard1.style.backgroundImage = `url(${json.results.image.medium_url})`;
    recommendationCard1.style.backgroundSize = "cover";

    //Checker
    console.log(
      "test du lien du site ligne 55: ",
      json.results.site_detail_url
    );

    return json;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

export { recommendation };
