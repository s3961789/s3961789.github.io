// HOVER
const originalImages = [
  "images/sumatra.png",
  "images/kalimantan.png",
  "images/sulawesi.png",
  "images/riau.png",
  "images/papua.png",
  "images/jawa.png",
  "images/bali.png",
  "images/ntt.png",
];

const hoverImages = [
  "images/sumatra-hover.png",
  "images/kalimantan-hover.png",
  "images/sulawesi-hover.png",
  "images/riau-hover.png",
  "images/papua-hover.png",
  "images/jawa-hover.png",
  "images/bali-hover.png",
  "images/ntt-hover.png",
];
// HOVER: I found different ways to store the original images and hovered images
// and decided to use two seperate arrays, because I'm most familiar with this methode
// I tried using map, but there're some part that I'm not sure why we need it, so using
// the methode that I'm most familiar with help me to deepen my understanding on it

const islands = document.querySelectorAll(".island");
let clickedState = new Array(islands.length).fill(false);

for (let i = 0; i < islands.length; i++) {
  const island = islands[i]; // Access the current island
  const originalSrc = island.src; // Original image
  const hoverSrc = originalSrc.replace(originalImages[i], hoverImages[i]); // Hover image replacement

  island.addEventListener("click", islandClicked);

  function islandClicked() {
    if (clickedState[i] === false) {
      clickedState[i] = true; // island is being clicked
      island.src = hoverSrc;
    } else {
      clickedState[i] = false; // Reset state to not clicked
      island.src = originalSrc;
    }
  }
  // I decided to keep the hovered images stay when being clicked, so user will remember which island is being clicked
  // code explanation for myself: When the page loads, the state of each island is false by default (not clicked), so IF clickedstate = false -> make it clicked and ELSE clickedstate = true -> make it unclicked

  island.addEventListener("mouseover", hoverActive);
  function hoverActive() {
    if (clickedState[i] === false) {
      island.src = hoverSrc;
    }
  }

  island.addEventListener("mouseout", hoverInactive);
  function hoverInactive() {
    if (clickedState[i] === false) {
      island.src = originalSrc;
    }
  }
}

// CLICK = OPEN POPUP
const popupData = {
  sumatra: {
    header: "Sumatra",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago.",
    position: { top: "20%", left: "25%" },
  },
  kalimantan: {
    header: "Kalimantan",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago.",
    position: { top: "10%", left: "10%" },
  },
  sulawesi: {
    header: "Sulawesi",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago.",
    position: { top: "20%", left: "25%" },
  },
  riau: {
    header: "Riau",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago.",
    position: { top: "20%", left: "25%" },
  },
  papua: {
    header: "Papua",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago.",
    position: { top: "20%", left: "25%" },
  },
  jawa: {
    header: "Jawa",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago.",
    position: { top: "20%", left: "25%" },
  },
  bali: {
    header: "Bali",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago.",
    position: { top: "20%", left: "25%" },
  },
  ntt: {
    header: "Nusa Tenggara",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago.",
    position: { top: "20%", left: "25%" },
  },
};
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupHeader = document.getElementById("popup-header");
const popupText = document.getElementById("popup-text");
const elements = document.querySelectorAll("[data-id]");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", getData);
  function getData(event) {
    const id = event.currentTarget.getAttribute("data-id");
    openPopup(id);
  }
}
// Function to open the popup with the relevant data (header, picture, text, buttons)
function openPopup(id) {
  const data = popupData[id];
  if (data) {
    popupHeader.textContent = data.header;
    popupImage.src = data.img;
    popupText.textContent = data.text;
    popup.style.top = data.position.top;
    popup.style.left = data.position.left;
    popup.style.display = "flex";
    islands.forEach((island) => {
      island.style.pointerEvents = "none";
      // this make user can only click at one island at a time, to reduce confusion and distraction just in case they try to hover on the other area
      // to activate the hover interactions, they have to close the popup first
    });
  }
}

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", closePopup);

function closePopup() {
  popup.style.display = "none";

  // Reset islands to their original state
  for (let i = 0; i < islands.length; i++) {
    islands[i].src = originalImages[i]; // Reset to original image
    clickedState[i] = false; // Reset clicked state
    islands[i].style.pointerEvents = "auto"; // Re-enable interaction
  }
}
