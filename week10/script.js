const myCat = document.querySelector("#my-cat");
console.log(myCat);

myCat.addEventListener("mouseover", showMoreInfo);
myCat.addEventListener("mouseout", hideMoreInfo);

const moreInfo = document.querySelector("#more-info");
function showMoreInfo() {
  moreInfo.classList.add("show");
}
function hideMoreInfo() {
  moreInfo.classList.remove("show");
}
// -------------------------------------- DROP DOWN MENU

const profileButton = document.querySelector("#profile-button");
console.log(profileButton);

profileButton.addEventListener("click", showList);

const profileContent = document.querySelector("#profile-content");
console.log(profileContent);

function showList() {
  profileContent.classList.toggle("show");
}

// -----------------  NAVIGATE ACTION  ------------------
const bottomButton = document.querySelector("#bottom-button");
console.log(bottomButton);

bottomButton.addEventListener("click", gotoBottom);

function gotoBottom() {
  window.location.href = "#bottom";
}

const topButton = document.querySelector("#top-button");
console.log(topButton);

topButton.addEventListener("click", gotoTop);

function gotoTop() {
  window.location.href = "#top";
}

// -----------------  DRAGABLE  ------------------
const purpleBox = document.querySelector("#purple-box");
console.log(purpleBox);

const dropBox = document.querySelector("#drop-box");
console.log(dropBox);

let draggedElement = null;

purpleBox.addEventListener("dragstart", startDrag);

function startDrag() {
  draggedElement = purpleBox;
}

dropBox.addEventListener("dragover", endDrag);
function endDrag() {
  event.preventDefault();
}
console.log("dragging ended");

dropBox.addEventListener("drop", handleDrop);

function handleDrop() {
  if (draggedElement) {
    const color = window
      .getComputedStyle(draggedElement)
      .getPropertyValue("background-color");
    console.log(color);
    dropBox.style.backgroundColor = color;
    dropBox.textContent = "content dropped";
    draggedElement = null;
  }
}
