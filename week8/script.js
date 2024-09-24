const myVideo = document.querySelector("#my-video");
console.log(myVideo);

const playPauseBtn = document.querySelector("#play-pause-btn");
console.log(playPauseBtn);

const playPauseImg = document.querySelector("#play-pause-img");

playPauseBtn.addEventListener("click", toggleplay);

function toggleplay() {
  if (myVideo.paused || myVideo.ended) {
    myVideo.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
  } else {
    myVideo.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}

const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");
// myVideo.muted = false;
muteUnmuteBtn.addEventListener("click", toggleSound);
// muteUnmuteBtn.style.backgroundColor = "red";
const muteUnmuteImg = document.querySelector("#mute-unmute-img");

function toggleSound() {
  if (myVideo.muted) {
    myVideo.muted = false;
    muteUnmuteBtn.style.backgroundColor = "blue";
    muteUnmuteImg.src =
      "https://img.icons8.com/ios-glyphs/30/high-volume--v1.png";
  } else {
    myVideo.muted = true;
    muteUnmuteBtn.style.backgroundColor = "red";
    muteUnmuteImg.src = "https://img.icons8.com/ios-glyphs/30/no-audio--v1.png";
  }
}

const progressBar = document.querySelector("#progress-bar-fill");
console.log(progressBar);

myVideo.addEventListener("timeupdate", fillProgress);

function fillProgress() {
  const currentTime = myVideo.currentTime;
  //   console.log("current time", progress.toFixed(2));
  const progress = (currentTime / myVideo.duration) * 100;
  //   console.log("progress", progress.toFixed(2));
  progressBar.style.width = progress + "%";
}

// not working

const step1Btn = document.querySelector("#step-1-btn");
console.log(step1Btn);

step1Btn.addEventListener("click", gotoStep1);

function gotoStep1() {
  myVideo.currentTime = 18.4;
}

const step2Btn = document.querySelector("#step-2-btn");
console.log(step1Btn);

step2Btn.addEventListener("click", gotoStep2);

function gotoStep2() {
  myVideo.currentTime = 38.4;
}

let likeCount = 0;
const likes = document.querySelector("#likes");
console.log(likes);

const likeBtn = document.querySelector("#like-btn");

likeBtn.addEventListener("click", addLikes);

function addLikes() {
  likeCount++;
  likes.textContent = likeCount;
}

myVideo.addEventListener("dblclick", toggleFullScreen);

function toggleFullScreen() {
  console.log("video is double clicked");
  if (!document.fullscreenElement) {
    myVideo.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
}

const videos = [
  {
    name: "zenscape",
    src: "zenscape.mp4",
  },
  { name: "stardust", src: "stardust.mp4" },
];

let currentIndez = 0;
const videoName = document.querySelector("#video-name");

const firstBtn = document.querySelector("#first-video-btn");
console.log(firstBtn);
firstBtn.addEventListener("click", function () {
  chooseVideo(0); // 0 - frist video
});

const secondBtn = document.querySelector("#second-video-btn");
console.log(secondBtn);
secondBtn.addEventListener("click", function () {
  chooseVideo(1); // 1 - second video
});

function chooseVideo(no) {
  myVideo.src = videos[no].src;
  videoName.textContent = videos[no].name;
  console.log(myVideo.src);
  myVideo.load();
  myVideo.play();
}
