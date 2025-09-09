document.addEventListener('DOMContentLoaded', () => {
    // Animate link cards on page load
    const linkCards = document.querySelectorAll('.link-card');

    linkCards.forEach((card, index) => {
        // Set initial state for animation
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Animate with a delay for each card
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 150 * (index + 1)); // Staggered delay
    });
});
