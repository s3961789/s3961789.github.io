// RAIN and BIRDS sound
const rainButton = document.querySelector("#rain-button");
const rainSound = document.querySelector("#rain-sound");
rainButton.addEventListener("click", toggleRainSound);

rainSound.volume = 0.2;
// I decided to reduce the sound for the rain and birds because
// it only works as a secondary sound, and I want the main sounds to stand out

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

// Changing the background color of the button when clicked -> if rainSound and birdSound played is needed to give a sense of state change
// for the user to know what actions has been made or what button activated

// TIMER
const startingMinutes = 5;
let time = startingMinutes * 60;
let countdownActive = false;

const timerElement = document.querySelector("#timer");
const startButton = document.querySelector("#start-button");
const stopButton = document.querySelector("#stop-button");

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

//  Clock Timer: https://www.youtube.com/watch?v=x7WJEmxNlEs
//  it didn't work at first, and I tried to change getElementById to QuerySelector then it works

// CHANGE SOUND

const sounds = [
  { name: "Cozy Winter", src: "sounds/sound1.mp3" },
  { name: "Warm Summer", src: "sounds/sound2.mp3" },
  { name: "Breezy Spring", src: "sounds/sound3.mp3" },
];

let currentIndez = 0;
const musicName = document.querySelector("#music-name");
const musicButton = document.querySelector("#music-button");
console.log(musicButton);
const sound = document.querySelector("#sound");
let musicNo = 0;

// musicButton.addEventListener("click", function () {
//   if (musicNo < sounds.length) {
//     chooseMusic(musicNo) // 0 - frist video
//     musicNo++; }});

// Instead of using the code on top I decided to use modulo
// to reset the musicNo back to 0 after reaching the end creating a list that loop

musicButton.addEventListener("click", function () {
  chooseMusic(musicNo);
  musicNo = (musicNo + 1) % sounds.length;
});

function chooseMusic(no) {
  sound.src = sounds[no].src;
  console.log(sound.src);
  musicName.textContent = sounds[no].name;
  sound.play();
}
// I decided to add sound.play here, so that when the sound is changed, it'll immedietly be played,
// instead of waiting to click the start and stop button to activate the sound
// However, the sound will be stopped, when we click stop

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

// this function was learnt from chatgpt when I asked how to replace the start button with stop button,
// I tried using innerHTML to change the button text when the timer is in active condition, but I wasn't able to do that
// instead, I just created a new 'stop' button, and create a toggle function

// INCREASE DECREASE SOUND
const increaseVolumeButton = document.querySelector("#volume-up");
increaseVolumeButton.addEventListener("click", increaseVolume);

const decreaseVolumeButton = document.querySelector("#volume-down");
decreaseVolumeButton.addEventListener("click", decreaseVolume);

function increaseVolume() {
  if (sound.volume < 0.9) {
    sound.volume += 0.1;
  }
}
function decreaseVolume() {
  if (sound.volume > 0.11) {
    sound.volume -= 0.1;
  }
}

// This was the last feature I did in this website, it was repeatedly learnt together in class
