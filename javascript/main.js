const ctx = document.getElementById('radar-chart').getContext('2d');
const radarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Gestion de projets', 'Travail en équipe', 'Adaptabilité', 'Organisation', 'Créativité'],
    datasets: [
      {
        label: 'Niveau',
        data: [3, 4, 3, 2, 4], // Valeurs correctes
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
      },
    ],
  },
  options: {
    scales: {
      r: {
        min: 0, // Début de l'échelle
        max: 5, // Échelle maximale
        ticks: {
          stepSize: 1, // Pas entre les valeurs
          display: false, // Supprime les chiffres internes
        },
        grid: {
          circular: true,
          color: 'rgba(255, 255, 255, 0.1)',
        },
        pointLabels: {
          color: 'white', // Couleur des noms des compétences
          font: {
            size: 16, // Taille des labels du diagramme
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',
          font: {
            size: 16, // Taille de la légende
          },
        },
      },
    },
  },
});


const baseURL = "https://elladanserrano.github.io/elladan-serrano.github.io/";

// Données des projets
const projectsData = [
  {
    id: 1,
    title: "Création individuelle : Site Web métier",
    description: "Page web de présentation du métier de développeur Full-Stack, en plusieurs parties (prérequis, langages, poursuites avancées du métier, différents salaires, liens utiles) avec réarrangement responsive design.",
    images: [
      "assets/projet1/image1.png",
      "assets/projet1/image2.png",
      "assets/projet1/image3.png",
      "assets/projet1/image4.png",
    ],
  },
  {
    id: 2,
    title: "Création d'un gestionnaire d'activités",
    description: "Conception d'un site web fictif de gestion d'animations lycéennes à partir d'une base de données fournie nommée 'animationsfld'. Le site est découpé en plusieurs parties pour chaque type d'utilisateur, et la mienne était sur les étudiants, pouvant accéder à leur profil, voir les animations à venir, s'y inscrire ou se désinscrire et voir les animations passées.",
    images: [
      "assets/projet2/image1.png",
      "assets/projet2/image2.png",
      "assets/projet2/image3.png",
      "assets/projet2/image4.png",
    ],
  },
  {
    id: 3,
    title: "Refonte de Site - Projet de Stage",
    description: "Reconstruction du site de l'association PERL, création de maquette complète, design épuré des pages avec meilleure lisibilité, ajout de nouvelles features pour rendre la manipulation 'admin' plus simple.",
    images: [
      "assets/projet3/image1.png",
      "assets/projet3/image2.png",
      "assets/projet3/image3.png",
      "assets/projet3/image4.png",
    ],
  },
  {
    id: 4,
    title: "Manipulation de données - Projet de Stage",
    description: "Site web avec interface rudimentaire réalisé pendant mon stage dans l'entreprise Alancia, servant de plateforme de gestion pour personnel, de stocks de produits, d'ajout, validation/refus, de suppression et de visualisation globale. Le site est accessible via XAMPP et relié à une base de données crée avec MySQL Workbench.",
    images: [
      "assets/projet4/image1.png",
      "assets/projet4/image2.png",
      "assets/projet4/image3.png",
      "assets/projet4/image4.png",
    ],
  },
  {
    id: 5,
    title: "Site vitrine fictif 'GoslingDrive'",
    description: "Site web de 1er semestre 2e année, site fictif de e-commerce/plateforme de Drive, en 3 parties pour clients/personnel/admin, gestion plus complexe des produits et stocks, algorithme basique de récupération des produits (basé sur IKEA) pour les commandes client. Système de récupération client par casier en libre service.",
    images: [
      "assets/projet5/image1.jpg",
      "assets/projet5/image2.jpg",
      "assets/projet5/image3.jpg",
      "assets/projet5/image4.jpg",
    ],
  },
];

// Sélection des éléments HTML
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalRight = document.querySelector(".modal-right");

// Fonction pour ouvrir une modale
function openProjectModal(projectId) {
  // Trouver les données du projet
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  // Mettre à jour le contenu de la modale
  modalTitle.textContent = project.title;
  modalDescription.textContent = project.description;

  // Générer le slider avec les images
  modalRight.innerHTML = project.images
    .map((image, index) => `
      <input class="input-modale" type="radio" name="slide" id="c${index + 1}" ${index === 0 ? "checked" : ""}>
      <label for="c${index + 1}" class="card" style="background-image: url(${image});">

      </label>
    `)
    .join("");

  // Afficher la modale
  modal.style.display = "flex";
}

// Fonction pour fermer la modale
function closeModal() {
  modal.style.display = "none";
}

// Fermer la modale en cliquant en dehors du contenu
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});




// Carousel veille

const veilleCarousel = document.querySelector('.veille-carousel');
const veilleItems = document.querySelectorAll('.veille-item');
const veillePrev = document.querySelector('.veille-prev');
const veilleNext = document.querySelector('.veille-next');

let index = 0;
const visibleItems = 3; // Number of items visible at a time
const totalItems = veilleItems.length;
const itemWidth = veilleItems[0].offsetWidth + 20;

function updateCarousel() {
    if (index >= totalItems - visibleItems + 1) {
        index = 0; // Loop back to the start when reaching the last full set
    }
    if (index < 0) {
        index = totalItems - visibleItems; // Go to the last full set when going backwards
    }
    
    const offset = index * itemWidth;
    veilleCarousel.style.transform = `translateX(-${offset}px)`;
}

veilleNext.addEventListener('click', () => {
    index++;
    updateCarousel();
});

veillePrev.addEventListener('click', () => {
    index--;
    updateCarousel();
});


// cartes et star-rating AI

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".skill").forEach(skill => {
      const rating = skill.getAttribute("data-rating");
      const starsContainer = skill.querySelector(".stars");
      for (let i = 1; i <= 5; i++) {
          let star = document.createElement("span");
          star.classList.add(i <= rating ? "filled" : "empty");
          star.innerHTML = "★";
          starsContainer.appendChild(star);
      }
  });
});

function flipCard(card) {
  card.classList.toggle('flipped');
}




