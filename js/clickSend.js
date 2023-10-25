// DOM Elements
const submitButton = document.querySelector(".submit");

function clickSend() {
  // Use enter to send the data
  const searchTerm = document.querySelector("#search");
  
  searchTerm.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      submitButton.click();
      // Listener with Dom and Try/Catch Fetch
      submitButton.addEventListener("click", async function (e) {
        e.preventDefault();
        const searchTerm = document.querySelector("#search").value;
        console.log("search term: ", searchTerm);
      });
    }
  });
}

export { clickSend };
