const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('show');
  });
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (siteNav.classList.contains('show')) {
      siteNav.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

const venueSlides = document.querySelectorAll('.venue-slide');
const heroSlides = document.querySelectorAll('.hero-slide');
let currentVenueSlide = 0;
let currentHeroSlide = 0;

function showSlides(slides, index) {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle('active', slideIndex === index);
  });
}

if (heroSlides.length > 1) {
  setInterval(() => {
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    showSlides(heroSlides, currentHeroSlide);
  }, 5000);
}

if (venueSlides.length > 1) {
  setInterval(() => {
    currentVenueSlide = (currentVenueSlide + 1) % venueSlides.length;
    showSlides(venueSlides, currentVenueSlide);
  }, 5000);
}
