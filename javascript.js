function toggleSearchInput() {
    const button = document.getElementById("search-button");
    const icon = document.getElementById("search-icon");
    const input = document.getElementById("search");

    if (button.style.display === "block") {
        button.style.display = "none";
        icon.style.display = "block";
        input.placeholder = "       Search";
    } else {
        button.style.display = "block";
        icon.style.display = "none";
        input.placeholder = "";
    }
}



function waitPageLoading() {
    setTimeout(function() {
        const loadingPage = document.getElementById("loading-page");
        const [container] = document.getElementsByClassName("container");
        const header = document.getElementById("main-header").firstElementChild;

        loadingPage.style.display = "none";
        header.style.display = "flex";
        container.style.display = "grid";

        if (navigator.appVersion.indexOf("Chrome/") != -1) {
            const profileName = document.getElementById("profile-name");
            const postAuthorName = document.getElementById("post-author-name");

            const profileSquare = document.getElementById("profile-square");

            const elements = [profileName, postAuthorName];

            console.log(elements);

            elements.map((element) => {
                element.classList.add("letter-spacing");
            });

            profileSquare.classList.add("font-16");
        }
    }, 2000);
}


waitPageLoading();
