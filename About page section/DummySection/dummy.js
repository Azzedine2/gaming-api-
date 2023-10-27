import { key } from "../../js/apiKey.js";

const bgVideoDom = document.querySelector(".bg-image");
const guid = "3030-11237";

// const urlVideo = `https://www.giantbomb.com/api/video/${guid}/?api_key=${key}&format=json`;
const urlVideo = `https://www.giantbomb.com/api/game/${guid}/?api_key=${key}&format=json`;
bgVideoDom.src = "https://www.youtube.com/watch?v=46BzOBWQXP8&ab_channel=AlexPlayz";
console.log("urlVideo: ", urlVideo);

// try {
//   const res = await fetch(urlVideo);
//   const json = await res.json();
//   const gameData = json.results.videos[0].site_detail_url;
//   console.log("Video Call Results: ", gameData);

//   bgVideoDom.src = gameData;
// } catch (error) {
//   console.log("error from dummy call: ", error);
// }
