let movieNameRef = document.getElementById("movie-name");
let searchBtn = document.getElementById("search-btn");
let result = document.getElementById("result");

//function to fetch data from api
let getMovie = () => {
    let movieName = movieNameRef.value;
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}&`;

    if(movieName <= 0) {
        result.innerHTML = `<h3 class="msg">Please enter a movie name</h3>`;
    } else {
        fetch(url).then((res) => res.json()).then((data) => {
            
        })
    }

}