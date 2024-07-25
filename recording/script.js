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

        // Ensure the greeting is displayed when entering full-screen mode
        function enterFullScreen(element) {
            if (element.requestFullscreen) {
                element.requestFullscreen();
            } else if (element.webkitRequestFullscreen) { /* Safari */
                element.webkitRequestFullscreen();
            } else if (element.msRequestFullscreen) { /* IE11 */
                element.msRequestFullscreen();
            }
        }

        const videoContainer = document.getElementById('video-container');
        videoContainer.addEventListener('dblclick', () => enterFullScreen(videoContainer));
