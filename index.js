// Import Function
import { searchGame } from "./js/searchFunction.js";

console.log(searchGame);

const submitButton = document.querySelector(".submit");
submitButton.addEventListener("click", searchGame());
