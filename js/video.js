var video;

window.addEventListener("load", function() {
    // Select the video element using its ID
    video = document.getElementById("player1");

    // Turn off autoplay
    video.autoplay = false;

    // Turn off looping
    video.loop = false;
});


// Play the video and update volume information
document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");

    var video = document.getElementById("player1");
    video.play();

    // Update volume information
    document.getElementById("volume").innerText = video.volume;
});

// Pause the video
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");

    var video = document.getElementById("player1");
    video.pause();
});

// Slow down the video
document.querySelector("#slower").addEventListener("click", function() {
    console.log("Slow down video");

    var video = document.getElementById("player1");
    video.playbackRate -= 0.1; // Reduce the playback rate by 10%
    console.log("Speed is:", video.playbackRate);
});

// Speed up the video
document.querySelector("#faster").addEventListener("click", function() {
    console.log("Speed up video");

    var video = document.getElementById("player1");
    video.playbackRate += 0.1; // Increase the playback rate by 10% relative to the current rate
    console.log("Speed is:", video.playbackRate);
});

// Skip 10 seconds ahead in the video
document.querySelector("#skip").addEventListener("click", function() {
    console.log("Skip by 10 seconds");

    var video = document.getElementById("player1");
    var newTime = video.currentTime + 10;

    if (newTime > video.duration) {
        video.currentTime = 0; // Go back to the start of the video if length exceeded
    } else {
        video.currentTime = newTime;
    }

	// Log the current location of the video
    console.log("Current Video Time:", video.currentTime);
});

// Mute or unmute the video
document.querySelector("#mute").addEventListener("click", function() {
    var video = document.getElementById("player1");
    var muteButton = document.getElementById("mute");

    // Toggle mute status
    video.muted = !video.muted;

    // Update button text based on mute status
    if (video.muted) {
        console.log("Mute Video");
        muteButton.textContent = "Unmute";
    } else {
        console.log("Unmute Video");
        muteButton.textContent = "Mute";
    }
});

// Change volume based on slider
document.querySelector("#slider").addEventListener("input", function() {
    var video = document.getElementById("player1");
    var slider = document.getElementById("slider");
    var volumeSpan = document.getElementById("volume");

    // Set video volume based on slider value
    video.volume = slider.value / 100;

    // Update volume information in the <span> element
    volumeSpan.textContent = (video.volume * 100).toFixed(0) + "%";
});

// Add the 'oldSchool' class to the video element when the '#vintage' button is clicked
document.querySelector("#vintage").addEventListener("click", function() {
    var video = document.getElementById("player1");

    // Add the 'oldSchool' class to the video element
    video.classList.add("oldSchool");
});

// Remove the 'oldSchool' class from the video element when the '#orig' button is clicked
document.querySelector("#orig").addEventListener("click", function() {
    var video = document.getElementById("player1");

    // Remove the 'oldSchool' class from the video element
    video.classList.remove("oldSchool");
});
