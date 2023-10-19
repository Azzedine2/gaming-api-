// API Key
const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// Randomize for Guid
const randomGameIndexForGuidSearch = Math.floor(Math.random() * 80000);

// URL GiantBomb API
// const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-11237/?api_key=${key}
// &format=json`;

const urlGameByGuid = `https://www.giantbomb.com/api/game/3030-${randomGameIndexForGuidSearch}/?api_key=${key}
&format=json`;

const urlGameById = ``;

const urlGameAll = `https://www.giantbomb.com/api/games/?api_key=${key}&format=json`;

console.log(urlGameByGuid);
// Game GUID Exemple
// 3030-63

// Game Id Exemple
// 26

//  Classic Fetch
// fetch(url)
//   .then((res) => res.json())
//   .then((json) => console.log(json.results))
//   .catch((err) => console.log(err));

// Async Fetch
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

export { fetchGame, fetchGameAll };
