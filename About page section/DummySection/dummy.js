import { key } from "../../js/apiKey.js";

const bgVideoDom = document.querySelector(".bg-video");
const guid = "3030-11237";

// const urlVideo = `https://www.giantbomb.com/api/video/${guid}/?api_key=${key}&format=json`;
// bgVideoDom.src = "https://www.youtube.com/embed/46BzOBWQXP8";
// bgVideoDom.src = "https://www.youtube.com/embed/46BzOBWQXP8";
const urlVideo = `https://www.giantbomb.com/api/game/${guid}/?api_key=${key}&format=json`;
bgVideoDom.autoplay = true;
bgVideoDom.loop = true;
console.log("urlVideo: ", urlVideo);

try {
  const res = await fetch(urlVideo);
  const json = await res.json();
  const gameData = json.results.videos[0].site_detail_url;
  console.log("Video Call Results: ", gameData);

  bgVideoDom.src = gameData;
} catch (error) {
  console.log("error from dummy call: ", error);
}

/* <iframe width="1696" height="838" 
src="https://www.youtube.com/embed/46BzOBWQXP8" 
title="75 Minutes of Relaxing and Calming Nintendo Music" 
frameborder="0" allow="accelerometer; autoplay; 
clipboard-write; encrypted-media; gyroscope; 
picture-in-picture; web-share" allowfullscreen></iframe> */
