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

    // Create input for each letter of word
    input.innerHTML = "";
    for (let index = 0; index < word.length; index++) {
        const element = word[index];
        input.type = "text";
        input.disabled = true;
        input.appendChild(input);
    }
}

// Handle user input and update game stats
function handleInput(e) {
    // Ignore non-letters input and letters that have already guessed
    const key = e.target.value.toLowerCase();
    if(key.match(/^[a-z]+$/i) && !incorrectLetters.includes(`${key}`) && !correctLetters.includes(`${key}`)) {
        // Check if the letter is in word
        if(word.includes(key)) {
            // Update correct guess
            for (let index = 0; index < word.length; index++) {
                if(word[index] === key) {
                    input.querySelectorAll("input")[index].value += key;
                }
            }
            correctLetters += key;
        } else {
            // Update incorrect guess
            maxGuesses--;
            incorrectLetters.push(`${key}`);
            mistakes.innerText = incorrectLetters;
        }
    }

    // Update remain guess and check for win and lose conditions
    guessLeft.innerText = maxGuesses;
    if (correctLetters.length === word.length) {
        alert(`Congrats! You Found The Word ${word.toUpperCase()}`); 
        startNewGame();
    } else if(maxGuesses < 1) {
        alert("Game Over! You Don't Have Remaining Guesses!");
        for(let i = 0; i < word.length; i++) {
            // fill inputs with correct words
            input.querySelectorAll("input")[i].value = word[i];
        }
    }

    // Clear hunt element
    function showHintElement() {
        hintElement.style.display = "block";
        hintElement.style.opacity = "1";
    }

    // Setup event listeners
    resetBtn.addEventListener("click", startNewGame);
    hintBtn.addEventListener("click", showHintElement);
    typeInput.addEventListener("input", handleInput);
    input.addEventListener("click", () => typeInput.focus());
    document.addEventListener("keydown", typeInput.focus());

    startNewGame();
}
