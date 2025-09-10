// On sélectionne toutes les sections
const sections = document.querySelectorAll('section');

// Fonction pour révéler une section
const revealSection = () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionTop < screenPosition) {
      section.classList.add('visible'); // Ajoute la classe pour l'animation
    }
  });
};

// On écoute le scroll pour appliquer l'effet
window.addEventListener('scroll', revealSection);

// On lance une première fois au cas où certaines sections sont déjà visibles au chargement
revealSection();
