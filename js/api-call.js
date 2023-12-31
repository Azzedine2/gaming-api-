// Import
import { key } from "./apiKey.js";

// Randomize for Guid
const randomGameIndexForGuidSearch = Math.floor(Math.random() * 80000);

// Call by Searches Needs
const searchTerm = document.querySelector("#search").value;

// Array of Games for Specifiq Random Calls in About Page with Random Value on Length
// 3030-63, TOS: -21237, MGS 2: -22993, MGS2 S: -21654, FF 10: -11237,
const randomGameValues = [21237, 22993, 21654, 11237];
const randomGameIndex = Math.floor(Math.random() * randomGameValues.length);
const randomNumberIndex = randomGameValues[randomGameIndex];

// URL GiantBomb API Tweaks
// About Page Api Call
const urlGameByGuidAbout = `https://www.giantbomb.com/api/game/3030-${randomNumberIndex}/?api_key=${key}
&format=json`;

// Random Page Api Call
const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-${randomGameIndexForGuidSearch}/?api_key=${key}
&format=json`;

// Search Page Api Call
const urlGameBySearch = `https://www.giantbomb.com/api/search/?api_key=${key}&format=json&query=${searchTerm}`;

// All Games Api Call
const urlGameAll = `https://www.giantbomb.com/api/games/?api_key=${key}&format=json`;

// Checker
console.log();

// Async Fetch One Random Game 
async function fetchGame() {
  try {
    // Random Page Api Call
    const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-${randomGameIndexForGuidSearch}/?api_key=${key}&format=json`;

    const res = await fetch(urlGameByGuid);
    const gameData = await res.json();
    console.log("Search By Random Game Results: ", gameData);
    return gameData;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

// Async Fetch One Define Game (Same but to work with Game ID)
async function fetchDefineGame(gameId) {
  try {
    // Random Page Api Call
    const UrlDefineGame = `https://www.giantbomb.com/api/game/3030-${gameId}/?api_key=${key}&format=json`;

    const res = await fetch(UrlDefineGame);
    const gameData = await res.json();
    console.log("Search By Define Game Results: ", gameData);
    return gameData;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

// Async Fetch Array of Specifiq Games for About Page
async function fetchGameSpecifiq() {
  try {
    const res = await fetch(urlGameByGuidAbout);
    const json = await res.json();
    console.log(json);
    console.log("Search By Game Specifiq Array Results:", json);
    return json;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

// Async Fetch Game Search
async function fetchGameSearch(searchTerm) {
  try {
    // Url for Search
    const urlGameBySearch = `https://www.giantbomb.com/api/search/?api_key=${key}&format=json&query=${searchTerm}`;
    // Search Page Api Call
    const res = await fetch(urlGameBySearch);
    const gameData = await res.json();
    console.log("Search By Game Terms Results: ", gameData);
    return gameData;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

// Fetch All Games Random
async function fetchGameAll() {
  try {
    const res = await fetch(urlGameAll);
    const json = await res.json();
    console.log("Search By Game All Results: ", json);
    return json;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

// Fetch Video Call
async function fetchVideo(guid) {
  const urlFetchVideo = `https://www.giantbomb.com/api/video/?api_key=${key}&guid=${guid}&format=json&hd_url`;
  try {
    const res = fetch(urlFetchVideo);
    const jsonVideo = res.json();
    return jsonVideo;
  } catch (error) {
    console.log("Video Problem: ", error);
  }
}

export {
  fetchGame,
  fetchGameAll,
  fetchGameSpecifiq,
  fetchGameSearch,
  fetchDefineGame,
  fetchVideo,
};

// Images Tag List From the API

// icon_url
// :
// "https://www.giantbomb.com/a/uploads/square_avatar/12/124786/1713185-desperados___wanted_dead_or_alive.jpg"
// image_tags
// :
// "All Images,Box Art"
// medium_url
// :
// "https://www.giantbomb.com/a/uploads/scale_medium/12/124786/1713185-desperados___wanted_dead_or_alive.jpg"
// original_url
// :
// "https://www.giantbomb.com/a/uploads/original/12/124786/1713185-desperados___wanted_dead_or_alive.jpg"
// screen_large_url
// :
// "https://www.giantbomb.com/a/uploads/screen_kubrick/12/124786/1713185-desperados___wanted_dead_or_alive.jpg"
// screen_url
// :
// "https://www.giantbomb.com/a/uploads/screen_medium/12/124786/1713185-desperados___wanted_dead_or_alive.jpg"
// small_url
// :
// "https://www.giantbomb.com/a/uploads/scale_small/12/124786/1713185-desperados___wanted_dead_or_alive.jpg"
// super_url
// :
// "https://www.giantbomb.com/a/uploads/scale_large/12/124786/1713185-desperados___wanted_dead_or_alive.jpg"
// thumb_url
// :
// "https://www.giantbomb.com/a/uploads/scale_avatar/12/124786/1713185-desperados___wanted_dead_or_alive.jpg"
// tiny_url
