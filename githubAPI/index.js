const searchGithub = async () => {
    const username = document.getElementById("searchInput").value;
    const response = await fetch(`https://api.github.com/users/${username}`);
    const detailsContainer = document.querySelector(".details");
    const data = await response.json();

    if (response.ok) {
        detailsContainer.style.display = "flex";
        document.getElementById('result').innerHTML = `
        <div class="profile">
            <div class="profile-image">
                <img src="${data.avatar_url}" alt="">
            </div>
            <div class="profile-details">
                <h2 class="name">${data.name || data.login}</h2>
                <p class="username">@${data.login}</p>
                <p class="bio">${data.bio || "The account doesn't have bio."}

                <div class="stats">
                    <div>
                        <div class="stats-name">Public Repos</div>
                        <div class="stats-value">${data.public_repos}</div>
                    </div>
                    <div>
                        <div class="stats-name">Followers</div>
                        <div class="stats-value">${data.followers}</div>
                    </div>
                    <div>
                        <div class="stats-name">Following</div>
                        <div class="stats-value">${data.following}</div>
                    </div>
                </div>

                <div class="media">
                    <p>
                        <span class="media-value"></span>
                    </p>
                    <p>
                        <span class="media-value"></span>
                    </p>
                    <p>
                        <span class="media-value"></span>
                    </p>
                    <p>
                        <span class="media-value"></span>
                    </p>
                </div>
                
            </div>
        </div>
        `
    } else alert(data.message);
};
