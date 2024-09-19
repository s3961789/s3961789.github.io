const popButton = document.querySelector("#pop-button");
console.log(popButton);
const popSound = document.querySelector("#pop-sound");

popButton.addEventListener("click", playPopSound);

function playPopSound() {
  popSound.play();
}

const playButton = document.querySelector("#play-button");
// Button ^

const playSound = document.querySelector("#my-video");
// Sound ^

playButton.addEventListener("click", playPlaySound);

function playPlaySound() {
  playSound.play();
}

const pauseButton = document.querySelector("#pause-button");
const pauseSound = document.querySelector("#my-video");
pauseButton.addEventListener("click", playPauseSound);

function playPauseSound() {
  pauseSound.pause();
}
