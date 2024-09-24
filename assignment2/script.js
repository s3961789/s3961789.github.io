// RAIN and BIRDS sound
const rainButton = document.querySelector("#rain-button");
const rainSound = document.querySelector("#rain-sound");
rainButton.addEventListener("click", toggleRainSound);

rainSound.volume = 0.2;

function toggleRainSound() {
  if (rainSound.paused) {
    rainSound.play();
    rainButton.style.backgroundColor = "#f0e8e0";
  } else {
    rainSound.pause();
    rainButton.style.backgroundColor = "rgb(255, 255, 255)";
  }
}

const birdButton = document.querySelector("#bird-button");
const birdSound = document.querySelector("#bird-sound");
birdButton.addEventListener("click", toggleBirdSound);

birdSound.volume = 0.4;

function toggleBirdSound() {
  if (birdSound.paused) {
    birdSound.play();
    birdButton.style.backgroundColor = "#f0e8e0";
  } else {
    birdSound.pause();
    birdButton.style.backgroundColor = "rgb(255, 255, 255)";
  }
}

// TIMER
const startingMinutes = 5;
let time = startingMinutes * 60;
let countdownActive = false;

const timerElement = document.querySelector("#timer");
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");
const sound = document.querySelector("#sound1");

function startCountDown() {
  if (!countdownActive) {
    interval = setInterval(updateCountDown, 1000);
    countdownActive = true;
    sound.play();
    toggleButtons();
  } else {
  }
}

function stopCountDown() {
  clearInterval(interval);
  countdownActive = false;
  toggleButtons();
  sound.pause();
}

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerElement.innerHTML = `${minutes}:${seconds} `;

  if (time > 0) {
    time--;
  } else {
    clearInterval(interval);
    countdownActive = false;
    toggleButtons();
  }
}

// CHANGE SOUND
// const sound = [
//   {
//     name: "Cozy Winter",
//     src: "sound1.mp3",
//   },
//   { name: "Warm Summer", src: "sound2.mp3" },
//   { name: "Breezy Spring", src: "sound3.mp3" },
// ];

// let currentIndez = 0;
// const musicName = document.querySelector("#music-name");

// const musicButton = document.querySelector("#music-button");
// console.log(soundButton);

// musicButton.addEventListener("click", function () {
//   chooseMusic(0); // 0 - frist video
// });

// function chooseMusic(no) {
//   musicButton.src = music[no].src;
//   musicButton.textContent = music[no].name;
//   console.log(myVideo.src);
//   musicButton.play();
// }

// this function was learnt from chatgpt when I asked how to replace the start button with stop button,
// I tried using innerHTML to change the button text when the timer is in active condition, but I wasn't able to do that
// instead, I just created a new 'stop' button, and create a toggle function
function toggleButtons() {
  if (countdownActive) {
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";
  } else {
    stopButton.style.display = "none";
    startButton.style.display = "inline-block";
  }
}

startButton.addEventListener("click", startCountDown);
stopButton.addEventListener("click", stopCountDown);

const startBtn = document.querySelector("#start-btn");

// BACKGROUND SOUNG
