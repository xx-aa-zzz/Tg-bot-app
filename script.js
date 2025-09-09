document.addEventListener('DOMContentLoaded', () => {

    // Select all elements that need to be revealed
    const revealElements = document.querySelectorAll('.reveal');

    // Set up the Intersection Observer
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible on screen)
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the CSS animation
                entry.target.classList.add('visible');
                
                // Stop observing the element once it has been revealed
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Start observing each of the reveal elements
    revealElements.forEach(element => {
        observer.observe(element);
    });

});
