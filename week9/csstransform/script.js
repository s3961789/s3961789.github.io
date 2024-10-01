// MOVE BALL
const ball = document.querySelector(".ball");
console.log(ball);

const moveButton = document.querySelector("#move-button");
console.log(moveButton);
moveButton.addEventListener("click", moveBall);

let distance = 30;
let outerWidth = outer.clientWidth / 2 - 30;
function moveBall() {
  if (distance < outerWidth) {
    ball.style.transform = `translateX(${distance}px)`;
    distance += 30;
  }
}

// ROTATE BALL
const rotateButton = document.querySelector("#rotate-button");
console.log(rotateButton);
rotateButton.addEventListener("click", rotateBall);

let rDeg = 45;

function rotateBall() {
  ball.style.transform = `rotate${rDeg}deg`;
  rDeg += 45;
}

// SCALE BALL
const scaleButton = document.querySelector("#scale-button");
console.log(scaleButton);
rotateButton.addEventListener("click", scaleBall);

let scaleValue = 45;

function scaleBall() {
  if (scaleValue > 0.2) {
    ball.style.transform = `scale${scaleValue}deg`;
    rDeg += 45;
  }
}
