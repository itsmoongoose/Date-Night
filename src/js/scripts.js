// Declaring variables
const dateIdeasArray = [
    // Paid ideas - index 0-10
    "Sushi Battleship",
    "Go to the Movies/Arcade",
    "Mini Golf",
    "Visit the Zoo",
    "Go to the Mall",
    "Paint Pottery",
    "Make Dollarama Crafts",
    "Try Something New",
    "Go to Winners",
    "Challenge: Buy things that are the other's favourite colour",
    "Challenge: Choose the other's drink, snack, etc.",
    // Free ideas - index 11-22
    "Listen to Taylor Swift Records",
    "Play Minecraft",
    "Play Board Games",
    "Play Wii Games",
    "Work Out",
    "Longboard",
    "Make Bracelets",
    "Do a Rust Art Class",
    "Watch Roey Play Video Games",
    "Go on a Walk With Maggie",
    "Watch a Show/YouTube Video",
    "Try Something New"
];
const mainContainer = document.querySelector("#main-container");
const slotsContainer = document.querySelector("#slots-container");
const slotsRestingImg = document.querySelector("#slots-resting-img");
const btnPaid = document.querySelector("#btn-paid");
const btnRandom = document.querySelector("#btn-random");
const btnFree = document.querySelector("#btn-free");
let overlayDiv = "";
let dateIdea;
let typeSelect = "";

// Function -- creating and adding overlay
function createOverlay() {

    // Create overlay, image, and text
    overlayDiv = document.createElement("div");
    overlayDiv.classList.add("overlay-div");
    const overlayImg = document.createElement("img");
    overlayImg.classList.add("overlay-img");
    overlayImg.src = "img/ticket.png";
    const overlayTextTitle = document.createElement("h1");
    overlayTextTitle.classList.add("overlay-text-title");
    overlayTextTitle.textContent = "Winner!";
    const textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    const overlayTextContent = document.createElement("p");
    overlayTextContent.classList.add("overlay-text-content");
    overlayTextContent.textContent = dateIdea;

    // Add created elements to page
    overlayDiv.appendChild(overlayImg);
    overlayDiv.appendChild(overlayTextTitle);
    textDiv.appendChild(overlayTextContent);
    overlayDiv.appendChild(textDiv);
    mainContainer.appendChild(overlayDiv);
}

// Function -- remove overlay
function removeOverlay() {
    mainContainer.removeChild(overlayDiv);
}

// Function -- random date generator
function dateGenerator() {
    if (typeSelect == "paid") {
        const randomNum = Math.round(Math.random() * 10);
        dateIdea = dateIdeasArray[randomNum];
    } else if (typeSelect == "random") {
        const randomNum = Math.round(Math.random() * 11) + 11;
        dateIdea = dateIdeasArray[randomNum];
    } else if (typeSelect == "free") {
        const randomNum = Math.round(Math.random() * 23);
        dateIdea = dateIdeasArray[randomNum];
    }
}

// Function -- slot machine images
function slotChange() {
    if (typeSelect == "paid") {
        const slotsPaidImg = document.createElement("img");
        slotsPaidImg.src = "img/slots-paid.png";
        slotsPaidImg.classList.add("slots-paid-img");
        console.log(slotsContainer);
        slotsContainer.innerHTML = "";
        slotsContainer.appendChild(slotsPaidImg);
    } else if (typeSelect == "random") {
        const slotsRandomImg = document.createElement("img");
        slotsRandomImg.src = "img/slots-random.png";
        slotsRandomImg.classList.add("slots-random-img");
        slotsContainer.innerHTML = "";
        slotsContainer.appendChild(slotsRandomImg);
    } else if (typeSelect == "free") {
        const slotsFreeImg = document.createElement("img");
        slotsFreeImg.src = "img/slots-free.png";
        slotsFreeImg.classList.add("slots-free-img");
        slotsContainer.innerHTML = "";
        slotsContainer.appendChild(slotsFreeImg);
    }
}

// Event Listener -- paid button
btnPaid.addEventListener("click", (event) => {
    typeSelect = "paid";
    slotChange();
    dateGenerator();
    createOverlay();
    overlayDiv.addEventListener("click", (event) => {
        removeOverlay();
    });
});

// Event Listener -- random button
btnRandom.addEventListener("click", (event) => {
    typeSelect = "random";
    slotChange();
    dateGenerator();
    createOverlay();
    overlayDiv.addEventListener("click", (event) => {
        removeOverlay();
    });
});

// Event Listener -- free button
btnFree.addEventListener("click", (event) => {
    typeSelect = "free";
    slotChange();
    dateGenerator();
    createOverlay();
    overlayDiv.addEventListener("click", (event) => {
        removeOverlay();
    });
});