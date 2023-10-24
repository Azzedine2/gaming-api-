import { fetchGame } from "./api-call.js";
import { domFiller } from "./domFiller-function.js";

// Random Game Guid info Generator
async function RandomGameGeneratorGuid() {
  // Fetch Game All Into Variable
  const gameData = await fetchGame();

  domFiller(gameData);
}

export { RandomGameGeneratorGuid };
