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
const dots = document.querySelectorAll(".dot");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");

// Variable pour suivre l'index actuel
let currentIndex = 0;

// Fonction pour générer les points (dots)
function generatDot() {
  const dotsContainer = document.querySelector(".dots");
  slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.setAttribute("data-index", index);
    dot.addEventListener("click", () => {
      selectionDot(dot);
    });
    dotsContainer.appendChild(dot);

    // Ajouter la classe dot_selected au premier point
    if (index === 0) {
      dot.classList.add("dot_selected");
    }
  });
}

//fonction point selectionner
function selectionDot(dot) {
    dots.forEach((dot) => {
        dot.classList.remove("dot_selected");
    });
    dot.classList.add("dot_selected");
    currentIndex = parseInt(dot.getAttribute("data-index")); // Convertir l'index en entier
    showPicture(currentIndex);
}

// Appel de la fonction pour les points
generatDot();

// Fonction pour afficher une image
function showPicture(index) {
  bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
  tagLine.innerHTML = slides[index].tagLine;
  updateDot(index);
}

// Fonction pour mettre à jour le point sélectionné
function updateDot(index) {
  dots.forEach((dot, i) => {
      if (i === index) {
          dot.classList.add("dot_selected");
      } else {
          dot.classList.remove("dot_selected");
      }
  });
}


// Fonction pour afficher la première image
function showFirstPicture() {
    showPicture(0);
}


// Écouteurs d'événements pour les points
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showPicture(index);
    });
});

// Écouteurs d'événements pour les flèches
arrowLeft.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    showPicture(currentIndex);
});

arrowRight.addEventListener("click", () => {
    currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    showPicture(currentIndex);
});


// Appel de la fonction pour afficher la première image
showFirstPicture();



