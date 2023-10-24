// DOM Elements
const submitButton = document.querySelector(".submit");

function clickSend() {
  // Use enter to send the data
  const searchTerm = document.querySelector("#search");
  searchTerm.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      submitButton.click();
    }
  });
  return true
}

export { clickSend };
