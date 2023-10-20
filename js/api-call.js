// API Key
const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// Randomize for Guid
const randomGameIndexForGuidSearch = Math.floor(Math.random() * 80000);

// URL GiantBomb API Tweaks
// Array of Games for Specifiq Random Calls in About Page
// Game GUID Exemple
// 3030-63, TOS: -21237, MGS 2: -22993, MGS2 S: -21654, FF 10: -11237,
const randomGameValues = [21237, 22993, 21654, 11237];
const randomGameIndex = Math.floor(Math.random() * randomGameValues.length);
const randomNumberIndex = randomGameValues[randomGameIndex];

// About Page Api Call Function
const urlGameByGuidAbout = `https://www.giantbomb.com/api/game/3030-${randomNumberIndex}/?api_key=${key}
&format=json`;
// Random Page Api Call Function
const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-${randomGameIndexForGuidSearch}/?api_key=${key}
&format=json`;
// All Games Api Call Function
const urlGameAll = `https://www.giantbomb.com/api/games/?api_key=${key}&format=json`;

console.log(urlGameByGuid);

// Async Fetch One Random Game
async function fetchGame() {
  try {
    const res = await fetch(urlGameByGuid);
    const json = await res.json();
    console.log(json);
    console.log("Résultat de l'appel Game:", json);
    return json;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

// Async Fetch Array of Specifiq Games
async function fetchGameSpecifiq() {
  try {
    const res = await fetch(urlGameByGuidAbout);
    const json = await res.json();
    console.log(json);
    console.log("Résultat de l'appel Game:", json);
    return json;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

// Fetch All Games Random
async function fetchGameAll() {
  try {
    const res = await fetch(urlGameAll);
    const json = await res.json();
    console.log("Résultat de l'appel Game ALL:", json);
    return json;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

export { fetchGame, fetchGameAll, fetchGameSpecifiq };
