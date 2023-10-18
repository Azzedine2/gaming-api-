// Import Function
import { fetchGame, fetchGameAll } from "./js/api-call.js";

console.log(await fetchGame);

// DOM
const bgImg = document.querySelector(".bg-image");

// Async Game Loader Function
async function loadGame() {
  try {
    const gameData = await fetchGame();
    const imageUrl = gameData.results.image.screen_large_url;
    bgImg.src = imageUrl;
    console.log("Load Game success");
  } catch (error) {
    console.log(error);
  }
}
loadGame();
