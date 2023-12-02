//Generate random quotes api
const quoteApiUrl = "https://api.quotable.io/random?minLength=100&maxLength=140";
const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");

let quote = "";
let time = 60;
let timer = "";
let mistakes = 0;

//Get random quotes
const renderNewQuote = async () => {
    //Fetch content from quote api url
    const response = await fetch(quoteApiUrl);
    let data = await response.json();
    quote = data.content;

    //Generate array for chars in quote.
    let arr = quote.split("").map((value) => {
        return "<span class='quote-chars'>" + value + "</span>";
    });
    quoteSection.innerHTML += arr.join("");
}

//Logic to compare input words with quote
userInput.addEventListener("input", () => {
    let quoteChars = document.querySelectorAll(".quote-chars");
    quoteChars = Array.from(quoteChars);

    //Array of user input chars
    let userInputChars = userInput.value.split("");
    //Loop through each char in quote
    quoteChars.forEach((char, index) => {
        //check chars with quote chars
        if(char.innerHTML == userInputChars[index]) {
            char.classList.add("success");
        }
        //If user hasn't entered anything or backspaced
        else if(userInputChars[char] == null) {
            if(char.classList.contains("success")) {
                char.classList.remove("success");
            } else {
                char.classList.remove("fail");
            }
        }
        //
    });
});

