var fullscreen = document.getElementById("full");
var game = document.getElementById("gameid");

game.focus()

fullscreen.onclick = function() {
    let confirmation = confirm("Are you sure you want to fullscreen?");
    if (confirmation) {
        // Check if the browser supports fullscreen
        if (game.requestFullscreen) {
            game.requestFullscreen();
        } else if (game.mozRequestFullScreen) {
            game.mozRequestFullScreen();
        } else if (game.webkitRequestFullscreen) {
            game.webkitRequestFullscreen();
        } else if (game.msRequestFullscreen) {
            game.msRequestFullscreen();
        } else {
            alert("Your browser does not support fullscreen.");
        }
    }
};
