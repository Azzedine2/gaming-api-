// Import
import { domFiller } from "./domFiller-function.js";
import { fetchDefineGame } from "./api-call.js";
import { key } from "./apiKey.js";

// Add to History Function Needs
// 1. Empty Array to Store History And DOM Address
// const historyCard = document.querySelectorAll(".card-history");

// // Declaring the array without assigning anything
// let gameHistory;

// // 2. Function Length Checker
// function checkHistoryLength(artBoxUrl, gameId) {
//   console.log(artBoxUrl, gameId);
//   if (gameHistory.length >= 3) {
//     gameHistory.shift();
//   }
//   gameHistory.push({ artBoxUrl, gameId });

//   saveHistoryToLocalStorage();
// }

// // 3. Function to Save History
// function saveHistoryToLocalStorage() {
//   localStorage.setItem("gameHistory", JSON.stringify(gameHistory));
// }

// // 4. Function to Load History
// function loadHistoryFromLocalStorage() {
//   const historyJSON = localStorage.getItem("gameHistory");
//   if (historyJSON) {
//     gameHistory = JSON.parse(historyJSON);
//     console.log("game history:", gameHistory);
//     return gameHistory;
//   }
//   gameHistory = [];
// }

// // // 5. Function to Display History
// function displayHistory() {
//   // historyCard.style.backgroundImage = `url(${})`;
//   for (let i = 0; i < gameHistory.length; i++) {
//     const element = gameHistory[i].artBoxUrl;
//     historyCard[i].style.backgroundImage = `url(${element})`;
//     console.log("element of loop :", element);
//     historyCard[i].style.backgroundSize = "cover";
//     historyCard[i].addEventListener("click", async function () {
//       // TO clean
//       /*****************************************/
//       const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-${gameHistory[i].gameId}/?api_key=${key}
// &format=json`;
//       try {
//         const res = await fetch(urlGameByGuid);
//         const json = await res.json();
//         const gameData = json;

//         // Checker
//         console.log("Display History error:", gameData);

//         domFiller(gameData);
//         /*****************************************/
//         // return json;
//       } catch (error) {
//         console.log("Droid not there:", error);
//       }

//       /*****************************************/
//     });
//   }
// }

// Main Function addToHistory
// function addToHistory(artBoxUrl, gameId) {
//   loadHistoryFromLocalStorage();
//   checkHistoryLength(artBoxUrl, gameId);
//   // displayHistory();
// }

// ************* Test **************************

// ****************************************************

// export { addToHistory };

// *********** Second Version ***********

const historyCard = document.querySelectorAll(".card-history");

let history;

function historyLength(artBoxUrl, gameId) {
  loadHistory();
  if (history.length >= 3) {
    history.shift();
    history.push({ artBoxUrl, gameId });
  } else {
    history.push({ artBoxUrl, gameId });
  }
  saveHistory();
}

function saveHistory() {
  localStorage.setItem("history", JSON.stringify(history));
  console.log("history: ", history);
}

function loadHistory() {
  const historyJSON = localStorage.getItem("history");
  if (historyJSON) {
    history = JSON.parse(historyJSON);
    return history;
  }
  history = [];
}

function displayHistory() {
  for (let i = 0; i < history.length; i++) {
    const historyArt = history[i].artBoxUrl;
    const gameId = history[i].gameId;
    // console.log("game id display History:", gameId);
    historyCard[i].style.backgroundImage = `url(${historyArt})`;
    historyCard[i].style.backgroundSize = "cover";

    // Click Listener
    historyCard[i].addEventListener("click", async function () {
      // fetchDefineGame(gameId)
      domFiller(await fetchDefineGame(gameId));
  });
  }
}

function addToHistory(artBoxUrl, gameId) {
  historyLength(artBoxUrl, gameId);
  displayHistory();
}

export { addToHistory };
