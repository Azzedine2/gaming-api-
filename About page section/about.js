// Import Function
import { fetchGameSpecifiq } from "../js/api-call.js";

console.log(await fetchGameSpecifiq);

// DOM
const bgImg = document.querySelector(".bg-image");

// Async Game Loader Function
async function loadGame() {
  try {
    const gameData = await fetchGameSpecifiq();
    const imageUrl = gameData.results.image.screen_large_url;
    bgImg.src = imageUrl;
    console.log("Load Game success");
  } catch (error) {
    console.log(error);
  }
}
loadGame();
