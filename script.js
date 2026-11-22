
const playButton = document.querySelector(".play");
const tracks = document.querySelectorAll(".track");
const progress = document.querySelector(".progress");

const currentTime = document.querySelector(
    ".time span:first-child"
);

const totalTime = document.querySelector(
    ".time span:last-child"
);

const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

const durations = [222, 255, 178, 190];

let currentTrack = 0;
let isPlaying = false;
let progressValue = 0;

function formatTime(seconds) {

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${String(remainingSeconds).padStart(2, "0")}`;
}

function selectTrack(index) {

    currentTrack = index;
    progressValue = 0;

    tracks.forEach((track, i) => {

        track.classList.toggle(
            "active",
            i === currentTrack
        );

    });

    totalTime.textContent =
        formatTime(durations[currentTrack]);

    currentTime.textContent = "0:00";

    progress.style.width = "0%";
}

playButton.addEventListener("click", function () {

    isPlaying = !isPlaying;

    playButton.textContent = isPlaying ? "Ⅱ" : "▶";

});

tracks.forEach((track, index) => {

    track.addEventListener("click", function () {

        selectTrack(index);

        isPlaying = true;
        playButton.textContent = "Ⅱ";

    });

});

nextButton.addEventListener("click", function () {

    selectTrack((currentTrack + 1) % tracks.length);

    isPlaying = true;
    playButton.textContent = "Ⅱ";

});

previousButton.addEventListener("click", function () {

    selectTrack(
        (currentTrack - 1 + tracks.length) % tracks.length
    );

    isPlaying = true;
    playButton.textContent = "Ⅱ";

});

setInterval(function () {

    if (isPlaying) {

        progressValue++;

        let percentage =
            (progressValue / durations[currentTrack]) * 100;

        progress.style.width = percentage + "%";

        currentTime.textContent = formatTime(progressValue);

        if (progressValue >= durations[currentTrack]) {

            selectTrack((currentTrack + 1) % tracks.length);

            isPlaying = true;
            playButton.textContent = "Ⅱ";

        }

    }

}, 1000);
