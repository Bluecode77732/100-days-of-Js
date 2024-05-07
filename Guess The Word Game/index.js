const input = document.querySelector(".word"),
    hintTag = document.querySelector(".hint span"),
    guessLeft = document.querySelector("guess span"),
    mistakes = document.querySelector(".wrong span"),
    resetBtn = document.querySelector(".reset"),
    hintBtn = document.querySelector("showHint"),
    hintElement = document.querySelector(".hint"),
    typeInput = document.querySelector(".type-input");

// Initializing game varibles
let word, incorrectLetters = [], correctLetters = [], maxGuesses;

// Selecct random word from word list and set up game
function startNewGame() {
    alert("New Game Started. Guess New Word!");
    // Hide hint element
    hintElement.style.display = "none";
    hintElement.style.opacity = "0";

    // Choose random word from db and setup game
    const ranWord = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranWord.word;
    // If word charactors >= 5 then max guess = 8 else max guess = 6
    maxGuesses = word.length >= 5 ? 8 : 6;
    incorrectLetters = [];
    correctLetters = [];
    hintTag.innerText = ranWord.hint;
    guessLeft.innerText = maxGuesses;
    mistakes.innerText = incorrectLetters;

    
}

