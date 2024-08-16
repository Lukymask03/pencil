document.addEventListener('DOMContentLoaded', () => {
    const pencil = document.getElementById('pencil');
    let isAnimating = false;

    pencil.addEventListener('click', () => {
        if (isAnimating) return; // Prevent multiple clicks during animation

        isAnimating = true;

        // Move forward
        pencil.style.transform = 'translateX(500px) translateY(-50%)';

        // Move backward after 1 second
        setTimeout(() => {
            pencil.style.transform = 'translateX(0) translateY(-50%)';
            isAnimating = false;
        }, 1000); // Duration of the forward movement
    });
});
