// Import Function
import { fetchGame, fetchGameAll } from "./js/api-call.js";

console.log(fetchGame())

// DOM
const bgImg = document.querySelector(".bg-image")

// DOM add
bgImg.src = fetchGame