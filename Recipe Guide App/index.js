const resultContainer = document.getElementById('result');  /* <div id="result"></div> */
const searchBtn = document.getElementById('search-button'); /* <button id="search-button">Search</button> */
const searchInput = document.getElementById('search-input');    /* <input type="text" id="search-input" placeholder="Type Cuisine Name"> */
const searchContainer = document.querySelector('.search-box');  /* <div class="search-box"> */

// API url to fetch meal data
const apiUrl = "www.themealdb.com/api/json/v1/1/random.php?s=";

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
        const ingredients = getI(meal);
        // Generate Html to display meal data
        const recipeHtml = `
            <div class="details">
                <h2>${meal.strMeal}</h2>
                <h4>${meal.strArea}</h4>
            </div>
            <img src=${meal.strMealThumb}/>
            <div id="ingre-container">
                <h3>Ingredients: </h3>
                <ul>${ingredients}</ul>
            </div>
            <div id="recipe">
                <button id="hide-recipe">X</button>
                <pre id="instructions">${meal.strInstructions}</pre>
                </div>
            <button id="show-recipe">View Recipe</button>
        `;
        resultContainer.innerHTML = recipeHtml;

        
    });  
};