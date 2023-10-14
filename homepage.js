// API Key
const key = "a3ed24058c6960422612f376ca988d6bdc6d4a67";

// URL GiantBomb API
const url = `https://www.giantbomb.com/api/game/3030-63/?api_key=${key}
&format=json`;
// const url = `https://www.giantbomb.com/api/games/?api_key=${key}&format=json`;
// 3030-63

//  Fetch
fetch(url)
  .then((res) => res.json())
  .then((json) => console.log(json.results))
  .catch((err) => console.log(err));
