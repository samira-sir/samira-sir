document.addEventListener("DOMContentLoaded", function() {
    // Check if the user is logged in
    if (sessionStorage.getItem("loggedIn") !== "true") {
        window.location.href = "../index.html";
    }
});
document.addEventListener('fullscreenchange', handleFullScreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
        document.addEventListener('mozfullscreenchange', handleFullScreenChange);
        document.addEventListener('MSFullscreenChange', handleFullScreenChange);

        function handleFullScreenChange() {
            const videoContainer = document.getElementById('video-container');
            const greeting = document.getElementById('greeting');

            if (document.fullscreenElement === videoContainer ||
                document.webkitFullscreenElement === videoContainer ||
                document.mozFullScreenElement === videoContainer ||
                document.msFullscreenElement === videoContainer) {
                greeting.style.display = 'block';
            } else {
                greeting.style.display = 'none';
            }
        }
