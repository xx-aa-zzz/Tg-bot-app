document.addEventListener('DOMContentLoaded', function() {
    // Typing effect for the name
    new Typed('#typing-effect', {
        strings: ['عبدالله محمد', 'مطور واجهات أمامية'],
        typeSpeed: 70,
        backSpeed: 50,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|',
    });

    // Animate link cards on load
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ${index * 0.1}s ease-out, transform 0.5s ${index * 0.1}s ease-out`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});
