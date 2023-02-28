// Funzione per animare le sezioni del curriculum
function animateSections() {
	const sections = document.querySelectorAll('section');
	sections.forEach((section, index) => {
		section.style.opacity = '0';
		section.style.transform = `translateX(-50px)`;
		setTimeout(() => {
			section.style.opacity = '1';
			section.style.transform = `translateX(0)`;
		}, (index + 1) * 500);
	});
}

// Funzione per aggiungere l'effetto di hover sulle sezioni
function addSectionHover() {
	const sections = document.querySelectorAll('section');
	sections.forEach(section => {
		section.addEventListener('mouseenter', () => {
			section.style.backgroundColor = '#eee';
		});
		section.addEventListener('mouseleave', () => {
			section.style.backgroundColor = '';
		});
	});
}

// Animazione delle sezioni al caricamento della pagina
window.addEventListener('load', () => {
	animateSections();
});

// Aggiunta dell'effetto di hover sulle sezioni
addSectionHover();

const socialLinkButton = document.getElementById('social-link');
const socialModal = document.getElementById('social-modal');
// seleziono il pulsante del menu dei social
const socialBtn = document.querySelector('#social-btn');

// seleziono il menu dei social
const socialMenu = document.querySelector('#social-menu');

// aggiungo un evento di click al pulsante del menu dei social
socialBtn.addEventListener('click', () => {
  // se il menu dei social è già visibile, lo nascondo
  if (socialMenu.classList.contains('visible')) {
    socialMenu.classList.remove('visible');
  } else { // altrimenti lo rendo visibile
    socialMenu.classList.add('visible');
  }
});

// seleziono tutti i link dei social nel menu
const socialLinks = document.querySelectorAll('.social-link');

// aggiungo un evento di click a tutti i link dei social
socialLinks.forEach(link => {
  link.addEventListener('click', () => {
    // apro il link in una nuova finestra
    window.open(link.href, '_blank');
  });
});
