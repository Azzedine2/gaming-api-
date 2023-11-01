import { fetchDefineGame } from "./api-call.js";
import { domFiller } from "./domFiller-function.js";

const favCards = document.querySelectorAll(".card-fav");
const cards = document.querySelectorAll(".card");

let favorites;

function addToFavorite(gameId, artBoxUrl) {
  cards.forEach((card, index) => {
    // Draggable
    card.setAttribute("draggable", true);

    // DragStart
    card.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", index.toString()); // Utilisez l'index comme identifiant
    });
  });

  favCards.forEach((favCard) => {
    favCard.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    favCard.addEventListener("drop", (e) => {
      e.preventDefault();
      const cardIndex = parseInt(e.dataTransfer.getData("text/plain")); // Obtenez l'index depuis les données transférées

      // Trouver la carte spécifique à partir de l'index
      const draggedCard = cards[cardIndex];

      if (draggedCard) {
        // Ajouter la carte aux favoris en copiant le nœud
        // const clonedCard = draggedCard.cloneNode(true);
        const clonedCard = draggedCard.cloneNode(true);
        // clonedCard.removeAttribute("draggable"); // Pour éviter la duplication de l'élément glissé
        favCard.appendChild(clonedCard);
        // favCard.innerHTML = clonedCard;
      }
      console.log("dropped", draggedCard);
    });
  });
}

export { addToFavorite };
