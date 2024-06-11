const resultContainer = document.getElementById('result');  /* <div id="result"></div> */
const searchBtn = document.getElementById('search-button'); /* <button id="search-button">Search</button> */
const searchInput = document.getElementById('search-input');    /* <input type="text" id="search-input" placeholder="Type Cuisine Name"> */
const searchContainer = document.querySelector('.search-box');  /* <div class="search-box"> */

// API url to fetch meal data
const apiUrl = "www.themealdb.com/api/json/v1/1/random.php?s=";

// Handle meal function

function searchMeal() {
    const userInput = searchInput.value.trim();
    if(!userInput) {
        resultContainer.innerHTML = `<h3>Input Field Cannot Be Empty</h3>`;
        return;
    }
    // Fetch meal data using api with user input
    
}

// Generate HTML for list of ingredients

function getIngredients(meal) {
    let ingredientsHTML = "";
    // There can be maximum of 20 ingredients
    for (let i = 0; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if(ingredient) {
            const measure = meal[`strIngredient${i}`];
            ingredientsHTML += `<li>${measure} ${ingredient}</li>`
        } else {    
        // if ingredient doesn't exist, exit loop
            break;
        }
    }
    return ingredientsHTML;
}

// Handle show and hide recipe for a meal
function hideRecipe() {     /" 1st fn "/
    const recipe = document.getElementById("recipe");
    recipe.style.display = "none";
}

function showRecipe() {     /" 2nd fn "/
    const recipe = document.getElementById("recipe");
    recipe.style.display = "block";
}
