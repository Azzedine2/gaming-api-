// API Key
const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// Add to History Function Needs
// 1. Empty Array to Store History And DOM Address
const historyCard = document.querySelectorAll(".card-history");

// Another way
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

        // Checker
        console.log(json);
        console.log("inside the handler msg:", json);
        console.log(json.results.image.medium_url);

        //Checker
        console.log(
          "test du lien du site ligne 55: ",
          json.results.site_detail_url
        );

        /*****************************************/

        // // DOM Grabber
        // const bgImg = document.querySelector(".bg-image");
        // const gameTitle = document.querySelector("#game-title");
        // const artBox = document.querySelector("#main-img");
        // const description = document.querySelector("#description");
        // const year = document.querySelector("#year");
        // const gameApiLink = document.querySelector("#game-api-link");

        // // Content Url to Variable
        // const bgImageUrl = gameData.results.image.screen_large_url;
        // const titleUrl = gameData.results.name;
        // const artBoxUrl = gameData.results.image.medium_url;
        // const descriptionUrl = gameData.results.deck;
        // const gameLink = gameData.results.site_detail_url;
        // const gameId = gameData.results.id;

        // console.log("game url link :", gameLink);

        // // Release Date if Statement
        // let yearUrl;
        // if (gameData.results.expected_release_year !== null) {
        //   yearUrl = gameData.results.expected_release_year;
        // } else {
        //   yearUrl = gameData.results.original_release_date;
        // }

        // // API Infos To innerHtml Dom
        // bgImg.src = bgImageUrl;
        // gameTitle.innerHTML = titleUrl;

        // artBox.src = artBoxUrl;
        // // History artBox Function Call
        // addToHistory(artBoxUrl, gameId);

        // gameApiLink.href = gameLink;

        // description.innerHTML = descriptionUrl;
        // year.innerHTML = yearUrl;

        /*****************************************/
        return json;
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
