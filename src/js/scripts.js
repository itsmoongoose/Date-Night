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
const slotsContainer = document.querySelector(".slots-container");
const slotsRestingImg = document.querySelector("#slots-resting-img");
const slotsImgClass = document.querySelector(".slots-img");
const btnPaid = document.querySelector("#btn-paid");
const btnRandom = document.querySelector("#btn-random");
const btnFree = document.querySelector("#btn-free");