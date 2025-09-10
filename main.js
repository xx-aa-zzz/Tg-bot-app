// JavaScript for mobile menu toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});


// [جديد] JavaScript for Carousel
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');
const images = document.querySelectorAll('.carousel-inner img');

let currentIndex = 0;
let imageWidth = images[0].clientWidth;

function updateCarousel() {
    imageWidth = images[0].clientWidth; // Update width on resize
    const offset = -currentIndex * imageWidth;
    carouselInner.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', () => {
    if (currentIndex < images.length - 1) { // Stop at the last image
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Update carousel on window resize
window.addEventListener('resize', updateCarousel);
