// كود قائمة الهامبرغر
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


// [جديد] كود معرض الأعمال القابل للسحب (Swipe)
const track = document.querySelector('.carousel-track');
const container = document.querySelector('.carousel-container');

let isDragging = false;
let startX;
let scrollLeft;

// للسحب بالماوس على الكمبيوتر
container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = 'grabbing';
});

container.addEventListener('mouseleave', () => {
    isDragging = false;
    container.style.cursor = 'grab';
});

container.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
});

container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // سرعة السحب
    container.scrollLeft = scrollLeft - walk;
});

// للسحب باللمس على الجوال
container.addEventListener('touchstart', (e) => {
    isDragging = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
});

container.addEventListener('touchend', () => {
    isDragging = false;
});

container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
});
