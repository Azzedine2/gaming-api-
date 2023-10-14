// API Key
const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// URL GiantBomb API
const urlGame = `https://www.giantbomb.com/api/game/3030-63/?api_key=${key}
&format=json`;

const urlGameAll = `https://www.giantbomb.com/api/games/?api_key=${key}&format=json`;

// Game GUID Exemple
// 3030-63

//  Classic Fetch
// fetch(url)
//   .then((res) => res.json())
//   .then((json) => console.log(json.results))
//   .catch((err) => console.log(err));

// Async Fetch
async function fetchGame() {
  try {
    const res = await fetch(urlGame);
    const json = await res.json();
    console.log(json);
    console.log("Résultat de l'appel:", json);
    return json;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

async function fetchGameAll() {
  try {
    const res = await fetch(urlGameAll);
    const json = await res.json();
    console.log("Résultat de l'appel:", json);
    return json;
  } catch (error) {
    console.log("Droid not there:", error);
  }
}

export { fetchGame, fetchGameAll };
