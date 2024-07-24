document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "../index.html";
    }
});