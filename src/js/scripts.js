// Declaring variables
const dateIdeasArray = [
    // Paid ideas - index 0-10
    "Sushi Battleship",
    "Going to the Movies & Arcade",
    "Mini Golf",
    "Visiting the Zoo",
    "Going to the Mall",
    "Painting Pottery",
    "Making Dollarama Crafts",
    "Trying Something New",
    "Going to Winners",
    "Challenge 1: Buy things that are the other's favourite colour",
    "Challenge 2: Choose the other's drink, snack, etc.",
    // Free ideas - index 11-22
    "Listening to Taylor Swift Records",
    "Playing Minecraft",
    "Playing Board Games",
    "Playing Wii Games",
    "Working Out",
    "Longboarding",
    "Making Bracelets",
    "Doing a Rust Art Class",
    "Watching Roey Play Video Games",
    "Going on a Walk With Maggie",
    "Watching a Show/YouTube Video",
    "Trying Something New"
];
const mainContainer = document.querySelector("#main-container");
const slotsContainer = document.querySelector(".slots-container");
const slotsRestingImg = document.querySelector("#slots-resting-img");
const slotsImgClass = document.querySelector(".slots-img");
const btnPaid = document.querySelector("#btn-paid");
const btnRandom = document.querySelector("#btn-random");
const btnFree = document.querySelector("#btn-free");
let overlayDiv = "";

// Function -- creating and adding overlay
function createOverlay() {

    // Create overlay, image, and text
    overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay-div");
    overlayDiv.classList.remove("hidden");
    const overlayImg = document.createElement("img");
    overlayImg.classList.add("overlay-img");
    overlayImg.src = "img/ticket.png";

    // Add created elements to page
    overlayDiv.appendChild(overlayImg);
    mainContainer.appendChild(overlayDiv);
}

// Function -- remove overlay
function removeOverlay() {
    overlayDiv.classList.add("hidden");
}

// Event Listener -- paid button
btnPaid.addEventListener("click", (event) => {
    createOverlay();
    overlayDiv.addEventListener("click", (event) => {
        removeOverlay();
    });
});

// Event Listener -- random button
btnRandom.addEventListener("click", (event) => {
    createOverlay();
    overlayDiv.addEventListener("click", (event) => {
        removeOverlay();
    });
});

// Event Listener -- free button
btnFree.addEventListener("click", (event) => {
    createOverlay();
    overlayDiv.addEventListener("click", (event) => {
        removeOverlay();
    });
});