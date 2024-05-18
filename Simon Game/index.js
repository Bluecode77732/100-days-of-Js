// get DOM elements needed for game
const scoreEL = document.getElementById("score");
const colorParts = document.querySelectorAll(".colors");
const containerEl = document.querySelector(".container");
const startBtn = document.querySelector("#start-btn");
const resultEl = document.querySelector("#score-result");
const wrapperEl = document.querySelector(".wrapper");

// current and new colors object
const colorObj = {
    color1 : { current: "#006400", new: "#00ff00"},
    color2 : { current: "#800000", new: "#ff0000"},
    color3 : { current: "#0000b8", new: "#0000ff"},
    color4 : { current: "#808000", new: "#ffff00"},
};

// gamevariables
let randomColors = [];
let isPathGenerating = false;
let score = 0;
let clickCount = 0;

// function to get a random color from colors object
const getRandomColor = (colorObj) => {
    const colorKeys = Object.keys(colorObj);
    return colorKeys[Math.floor(Math.random() * colorKeys.length)];
}

// function to pause execution of game for given amount of time
const delay = async(time) => {
    return await new Promise((resolve) => setTimeout(resolve, time));
};

// function to generate a random path of colors
const generateRandomPath = async () => {
    randomColors.push(getRandomColor(colorObj));
    score = randomColors.length;
    isPathGenerating = true;
    await showPath(randomColors);
}

// function to show the of colors to players
const showPath = async (colors) => {
    scoreEL.innerText = score;
    // loop through each color in the array
    for (const color of colors) {   /* of? */
        const currentColor = document.querySelector(`.${color}`);
        // pause execution for 500 milliseconds
        await delay(500);
        // set background to new color
        currentColor.style.backgroundColor = colorObj[color].new;
        await delay(600);
        // set background to old color
        currentColor.style.backgroundColor = colorObj[color].current;
        await delay(700);
    }
    // set flag to indicate the game is no longer generating path
    isPathGenerating = false;
}

