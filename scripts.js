// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Floating coin animation
const createFloatingCoins = () => {
    const hero = document.querySelector('#hero');
    for (let i = 0; i < 5; i++) {
        const coin = document.createElement('div');
        coin.className = 'floating-coin';
        coin.style.left = `${Math.random() * 100}%`;
        coin.style.animationDelay = `${Math.random() * 2}s`;
        hero.appendChild(coin);
    }
};

// Buy button animation
// const buyButton = document.querySelector('.buy-button');
// buyButton.addEventListener('click', () => {
//     buyButton.style.transform = 'scale(0.95)';
//     setTimeout(() => {
//         buyButton.style.transform = 'scale(1)';
//         alert('🚀 To the moon! (Connect wallet feature coming soon)');
//     }, 100);
// });

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply fade-in animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createFloatingCoins();
});
