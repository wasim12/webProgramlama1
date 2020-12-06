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