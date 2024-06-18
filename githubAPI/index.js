const searchGithub = async () => {
    const username = document.getElementById("searchInput").value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const detailsContainer =  document.querySelector(".details");
    const data = await response.json();
}


