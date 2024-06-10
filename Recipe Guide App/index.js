const resultContainer = document.getElementById('result');  /* <div id="result"></div> */
const searchBtn = document.getElementById('search-button'); /* <button id="search-button">Search</button> */
const searchInput = document.getElementById('search-input');    /* <input type="text" id="search-input" placeholder="Type Cuisine Name"> */
const searchContainer = document.querySelector('.search-box');  /* <div class="search-box"> */

// API url to fetch meal data
const apiUrl = "";

// Event listeners for search and input (when press enter)
searchBtn.addEventListener("click", );
searchInput.addEventListener("keydown", function(e) {
    if(e.keyCode === 13) {  /* keyCode alternatives */
        e.preventDefault();
        
    }
});

// Handle meal function

function searchMeal() {
    const userInput = searchInput.value.trim();
    if(!userInput) {
        resultContainer.innerHTML = `<h3>Input Field Cannot be Empty`;
        return;
    }
    // Fetch meal data using API with user input
    fetch(apiUrl + userInput).then(response => response.json()).then(data => {
        const meal = data.meals[0];
        // Handle where no meal found
        if(!meal) {
            resultContainer.innerHTML = `<h3>No Meal Found, Please Try Again.</h3>`;
            return;
        }
    })
    
}