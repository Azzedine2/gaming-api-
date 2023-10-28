import { domFiller } from "./domFiller-function.js";
// API Key
const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// Add to History Function Needs
// 1. Empty Array to Store History And DOM Address
const historyCard = document.querySelectorAll(".card-history");

// Declaring the array without assigning anything
let gameHistory;

// 2. Function Length Checker
function checkHistoryLength(artBoxUrl, gameId) {
  console.log(artBoxUrl, gameId);
  if (gameHistory.length >= 3) {
    gameHistory.shift();
  }
  gameHistory.push({ artBoxUrl, gameId });

  saveHistoryToLocalStorage();
}

// 3. Function to Save History
function saveHistoryToLocalStorage() {
  localStorage.setItem("gameHistory", JSON.stringify(gameHistory));
}

// 4. Function to Load History
function loadHistoryFromLocalStorage() {
  const historyJSON = localStorage.getItem("gameHistory");
  if (historyJSON) {
    gameHistory = JSON.parse(historyJSON);
    console.log("game history:", gameHistory);
    return gameHistory;
  }
  gameHistory = [];
}

// // 5. Function to Display History
function displayHistory() {
  // historyCard.style.backgroundImage = `url(${})`;
  for (let i = 0; i < gameHistory.length; i++) {
    const element = gameHistory[i].artBoxUrl;
    historyCard[i].style.backgroundImage = `url(${element})`;
    console.log("element of loop :", element);
    historyCard[i].style.backgroundSize = "cover";
    historyCard[i].addEventListener("click", async function () {
      // TO clean
      /*****************************************/
      const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-${gameHistory[i].gameId}/?api_key=${key}
&format=json`;
      try {
        const res = await fetch(urlGameByGuid);
        const json = await res.json();
        const gameData = json;

        domFiller(gameData, true);
        // Checker
        console.log("Display History error:", gameData);

        /*****************************************/
        // return json;
      } catch (error) {
        console.log("Droid not there:", error);
      }

      /*****************************************/
    });
  }
}

// Main Function addToHistory
function addToHistory(artBoxUrl, gameId) {
  loadHistoryFromLocalStorage();
  checkHistoryLength(artBoxUrl, gameId);
  displayHistory();
}

export { addToHistory };
