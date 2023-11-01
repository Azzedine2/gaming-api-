// Import
import { key } from "./apiKey.js";
import { clickSend } from "./clickSend.js";

// DOM
const search = document.querySelector("#search");
const suggestions = document.createElement("ul");
const searchTerm = document.querySelector("#search").value;

// URL
const urlGameBySearch = `https://www.giantbomb.com/api/search/?api_key=${key}&format=json&query=${searchTerm}`;

search.addEventListener("KeyboardEvent", async function () {
  if (searchTerm >= 3) {
    suggestions.innerHTML = "";
    try {
      const res = await fetch(urlGameBySearch);
      const gameData = await res.json();
      gameData.results.forEach(function (result) {
        search.appendChild(suggestions);
        const suggestionItem = document.createElement("li");
        suggestionItem.textContent = result.name;
        suggestions.appendChild(suggestionItem);
      });
    } catch (error) {
      console.log("Suggestions Error", error);
    }
  } else {
    suggestions.innerHTML = "";
  }
});

export { suggestions };
