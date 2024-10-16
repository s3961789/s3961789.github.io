const originalImages = [
  "sumatra.png",
  "kalimantan.png",
  "sulawesi.png",
  "riau.png",
  "papua.png",
  "jawa.png",
  "bali.png",
  "ntt.png",
];

const hoverImages = [
  "sumatra-hover.png",
  "kalimantan-hover.png",
  "sulawesi-hover.png",
  "riau-hover.png",
  "papua-hover.png",
  "jawa-hover.png",
  "bali-hover.png",
  "ntt-hover.png",
];

const islands = document.querySelectorAll(".island");

const popup = document.getElementById("#popup");
const popupText = document.getElementById("#popup-text");
const closeBtn = document.getElementById("#close-btn");

islands.forEach((island, indexNo) => {
  const originalSrc = island.src; // original image
  const hoverSrc = originalSrc.replace(
    originalImages[indexNo],
    hoverImages[indexNo]
  );

  island.addEventListener("mouseover", hoverActive);
  function hoverActive() {
    island.src = hoverSrc;
  }

  island.addEventListener("mouseout", hoverInactive);
  function hoverInactive() {
    island.src = originalSrc;
  }
});

// HOVER: I found different ways to store the original images and hovered images
// and decided to use two seperate arrays, because I'm most familiar with this methode
// I tried using map, but there're somepart that I'm not sure why we need it, so using
// the methode that I'm most familiar with help me to deepen my understanding on it
