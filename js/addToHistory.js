// Add to History Function Needs
// 1. Empty Array to Store History
let gameHistory = [];
const historyCard = document.querySelector(".card-history")

// 2. Function Length Checker
function checkHistoryLength() {
  if (gameHistory.length >= 3) {
    gameHistory.shift();
  }
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
  }
}

// Main Function addToHistory
function addToHistory(artBox) {
  checkHistoryLength();
  loadHistoryFromLocalStorage();
  saveHistoryToLocalStorage();
}

export { addToHistory };
