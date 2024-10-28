// HOVER
const originalImages = [
  "images/sumatra.png",
  "images/kalimantan.png",
  "images/sulawesi.png",
  "images/maluku.png",
  "images/papua.png",
  "images/jawa.png",
  "images/bali.png",
  "images/ntt.png",
];

const hoverImages = [
  "images/sumatra-hover.png",
  "images/kalimantan-hover.png",
  "images/sulawesi-hover.png",
  "images/maluku-hover.png",
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
  island.addEventListener("click", playClickSound);
  console.log(island);

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
const popupData = [
  {
    header: "Sumatra",
    img: "images/lake-toba.png",
    text: "Sumatra is home to Lake Toba, the largest volcanic lake in the world! It was formed by a supervolcanic eruption around 74,000 years ago",
    position: { top: "22%", left: "25%" },
  },
  {
    header: "Kalimantan",
    img: "images/nusantara.png",
    text: "Nusantara, Indonesia's new capital in East Kalimantan, means archipelago, symbolizing the unity of the nation’s diverse islands. It aims to be Southeast Asia's first carbon-neutral capital, focusing on green energy, electric vehicles, and forest preservation",
    position: { top: "18%", left: "44%" },
  },
  {
    header: "Sulawesi",
    img: "images/toraja.png",
    text: "In South Sulawesi, the Torajan people are popular for their funeral rituals, where funerals can span several days, featuring animal sacrifices, music, and traditional dances, with the deceased kept at home for months or years",
    position: { top: "32%", left: "61%" },
  },
  {
    header: "Maluku",
    img: "images/spices.png",
    text: "Maluku was once known as the Spice Islands because it was the world's only source of valuable spices like nutmeg, mace, and cloves during the 16th and 17th centuries, which sparked European wars for control of the islands",
    position: { top: "25%", left: "38%" },
  },
  {
    header: "Papua",
    img: "images/raja-ampat.png",
    text: "Raja Ampat, located off the northwest of Papua, is home to the world's most diverse marine life, boasting over 1,500 species of fish and 600 species of coral",
    position: { top: "38%", left: "51%" },
  },
  {
    header: "Jawa",
    img: "images/borobudur.png",
    text: "Candi Borobudur, located in Central Java, Indonesia, is the world's largest Buddhist temple. It was built during the 8th-9th centuries by the Sailendra Dynasty using over 2 million volcanic stone blocks",
    position: { top: "16%", left: "25%" },
  },
  {
    header: "Bali",
    img: "images/pura-bali.png",
    text: "Bali welcomed over 15.4 million international and domestic visitors in 2023. The island is renowned for its unique temples, traditional ceremonies, and places for relaxation and adventure",
    position: { top: "28%", left: "35%" },
  },
  {
    header: "Nusa Tenggara",
    img: "images/komodo.png",
    text: "Nusa Tenggara is home to the famous Komodo National Park, a UNESCO World Heritage site, which is the only place in the world where you can see the iconic Komodo dragons in their natural habitat",
    position: { top: "25%", left: "47%" },
  },
];
const popup = document.getElementById("popup");
const popupImage = document.getElementById("popup-image");
const popupHeader = document.getElementById("popup-header");
const popupText = document.getElementById("popup-text");
const elements = document.querySelectorAll("[data-id]");
let cities = document.getElementById("cities");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function () {
    openPopup(i);
  });
}
// Function to open the popup with the relevant data (header, picture, text, buttons)
function openPopup(id) {
  console.log(id);
  console.log(popupData[id].header);
  const data = popupData[id];
  popupHeader.textContent = data.header;
  popupImage.src = data.img;
  popupText.textContent = data.text;
  popup.style.top = data.position.top;
  popup.style.left = data.position.left;
  popup.style.display = "flex";
  // cities.setAttribute("data-id", data.header);
  console.log(cities);
  islands.forEach((island) => {
    island.style.pointerEvents = "none";
    // this make user can only click at one island at a time, to reduce confusion and distraction just in case they try to hover on the other area
    // to activate the hover interactions, they have to close the popup first
  });
}

const closeButton = document.getElementById("close-button");
closeButton.addEventListener("click", closePopup);

function closePopup() {
  popup.style.display = "none";

  for (let i = 0; i < islands.length; i++) {
    islands[i].src = originalImages[i]; // Reset to original image
    clickedState[i] = false; // Reset clicked state
    islands[i].style.pointerEvents = "auto";
  }
}

// SOUND;
// neutral background sound, and click sound effect

// function playMusic() {
//   backgroundMusic.play();
//   backgroundMusic.loop = true;

const musicButton = document.querySelector("#play");
const backgroundMusic = document.querySelector(".bg-sound");

musicButton.addEventListener("click", playMusic);
backgroundMusic.volume = 0.4;

function playMusic() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    backgroundMusic.loop = true;
    musicButton.src = "images/volume-on.png";
  } else {
    backgroundMusic.pause();
    musicButton.src = "images/volume-off.png";
  }
}
window.onload = playMusic;

const clickSound = document.querySelector(".click-sound");

popup.addEventListener("click", playClickSound);

function playClickSound() {
  clickSound.play();
}

// In my opinion, sound play a crucial role in determining an engaging educative website, especially for kids.
// in my website, I choose indonesian traditional sounds to represent the culture, and to give identity to the website
// moreover, I also added a click sound effect to make it more interactive, work as a audio feedback that an island has been clicked
