import { fetchGame } from "./api-call.js";
import { RandomGameGeneratorGuid } from "./guid-randomizer.js";

// WIP Function Recommendations / Similar games
async function recommendation() {
  // Fetch Game All Into Variable
  const gameData = await fetchGame();
  console.log("Game Data log:", gameData);

  // Dom Variable for Recommendation
  const recommendationCard = document.querySelectorAll(
    ".recommendation-title .card"
  );

  // Similar Game Variable
  const similarGame = gameData.results.similar_games;

  recommendationCard.textContent = similarGame

  // Checker
  console.log(
    "Similar games:",
    similarGame[Math.floor(Math.random() * 4)].name
  );
}

export { recommendation };
