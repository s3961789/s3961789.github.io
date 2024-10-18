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

const islands = document.querySelectorAll(".island");
let clickedState = new Array(islands.length).fill(false);

islands.forEach((island, indexNo) => {
  const originalSrc = island.src; // original image
  const hoverSrc = originalSrc.replace(
    originalImages[indexNo],
    hoverImages[indexNo]
  );

  // Handle click to toggle clicked state
  island.addEventListener("click", () => {
    clickedState[indexNo] = !clickedState[indexNo]; // Toggle state
    island.src = clickedState[indexNo] ? hoverSrc : originalSrc; // Update image
  });
  // I decided to keep the hovered images stay when being clicked, so user will remember which island is being clicked

  // Change to hover image on mouseover (only if not clicked)
  island.addEventListener("mouseover", () => {
    if (!clickedState[indexNo]) {
      island.src = hoverSrc;
    }
  });

  // Revert to original image on mouseout (only if not clicked)
  island.addEventListener("mouseout", () => {
    if (!clickedState[indexNo]) {
      island.src = originalSrc;
    }
  });
});
// island.addEventListener("click", clickActive)
// function clickActive (){
//   clickedState[indexNo] = !clickedState[indexNo]; // Toggle state
//   island.src = clickedState[indexNo] ? hoverSrc : originalSrc; // Update image
// };

// island.addEventListener("mouseover", hoverActive);
// function hoverActive() {
//   island.src = hoverSrc;
// }

// island.addEventListener("mouseout", hoverInactive);
// function hoverInactive() {
//   island.src = originalSrc;
// }

// HOVER: I found different ways to store the original images and hovered images
// and decided to use two seperate arrays, because I'm most familiar with this methode
// I tried using map, but there're somepart that I'm not sure why we need it, so using
// the methode that I'm most familiar with help me to deepen my understanding on it

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

// Function to open the popup with the relevant data
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
      // this to make user can click at one island at a time only, to reduce confusion and distraction just in case they try to hover on the other area
      // to activate the hover interactions, they have to close the popup first
    });
  }
}

// Add click event listeners to elements with data-id
document.querySelectorAll("[data-id]").forEach((element) => {
  element.addEventListener("click", (event) => {
    const id = event.currentTarget.getAttribute("data-id");
    openPopup(id);
  });
});

const closeButton = document.getElementById("close-button");

closeButton.addEventListener("click", closePopup);

function closePopup() {
  popup.style.display = "none";

  // Reset islands to their original state
  islands.forEach((island, indexNo) => {
    island.src = originalImages[indexNo]; // Reset to original image
    clickedState[indexNo] = false; // Reset clicked state
    island.style.pointerEvents = "auto"; // Re-enable interaction
    // to ensure a smooth interaction within the interactive map, I make sure the images is being reset after the pop up is closed
  });
}

// logic: click on the sumatra island and open popup which contain image, header, and text
