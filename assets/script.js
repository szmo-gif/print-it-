// Données des diapositives
const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
  }
];

// Éléments du carrousel
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

// Variable pour suivre l'index actuel
let currentIndex = 0;

/**
 * Génère les points pour un diaporama et les ajoute au conteneur de points.
 *
 * Cette fonction ne renvoie rien.
 */
const generateDots = () => {
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-index", index);

    // Ajouter la classe dot_selected au premier point
    if (index === 0) {
      dot.classList.add("dot_selected");
    }

    dotsContainer.appendChild(dot);
  });
}

/**
 * Selects a dot based on the dot index, adds a specific class to it, updates the currentIndex, and shows the corresponding picture.
 *
 * @param {number} dotIndex - The index of the dot to be selected
 * @return {void} No return value
 */
const selectDot = (dotIndex) => {
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });

  dots[dotIndex].classList.add("dot_selected");

  currentIndex = dotIndex;
  showPicture(currentIndex);
}

/**
 * Updates the banner image, alt text, and tag line based on the given index.
 *
 * @param {number} index - The index of the slide to display.
 * @return {void} This function does not return anything.
 */
const showPicture = (index) => {
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  bannerImg.alt = "Banner Print-it #" + (index + 1);
  tagLine.innerHTML = slides[index].tagLine;
}

/**
 * Updates the selected dot based on the given index.
 *
 * @param {number} index - The index of the dot to be selected
 * @return {void} No return value
 */
const updateDot = (index) => {
  const dotElements = document.querySelectorAll(".dot");

  dotElements.forEach((dot, dotIndex) => {
    dot.classList.remove("dot_selected");

    if (dotIndex === index) {
      dot.classList.add("dot_selected");
    }
  });
}

/**
 * Adds event listeners for arrow clicks and dot clicks, and assigns corresponding actions.
 *
 */
const addListeners = () => {
  // Écouteurs d'événements pour les flèches
  arrowLeft.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showPicture(currentIndex);
    updateDot(currentIndex);
  });

  arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showPicture(currentIndex);
    updateDot(currentIndex);
  });

  // Écouteurs d'événements pour les points
  const dots = document.querySelectorAll(".dot");

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      selectDot(index);
    });
  });
}

// Appel de la fonction pour afficher la première image et générer les points
generateDots();
addListeners();