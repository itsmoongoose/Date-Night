//Declaring variables
const dateIdeasList = [
    //Paid ideas - index 0-10
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
    //Free ideas - index 11-22
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
const paidBtn = document.getElementById('paid-btn');
const freeBtn = document.getElementById('free-btn');
const randomBtn = document.getElementById('random-btn');

//Function -- main
async function main() {

    //Click -- paid button
    paidBtn.addEventListener('click', function() {
        let randomNum = Math.floor(Math.random() * 11);
        let dateIdea = dateIdeasList[randomNum];
        alert("Winner! " + dateIdea);
    });

    //Click -- free button
    freeBtn.addEventListener('click', function() {
        let randomNum = Math.floor(Math.random() * 12) + 11;
        let dateIdea = dateIdeasList[randomNum];
        alert("Winner! " + dateIdea);
    });

    //CLick -- random button
    randomBtn.addEventListener('click', function() {
        let randomNum = Math.floor(Math.random() * 23);
        let dateIdea = dateIdeasList[randomNum];
        alert("Winner! " + dateIdea);
    });
}
main();