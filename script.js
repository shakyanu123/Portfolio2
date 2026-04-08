
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(0, 0, 0, 0.98)';
    } else {
        navbar.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Add more floating particles
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = '100%';
    particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';

    const colors = ['#00ff88', '#00b4d8', '#ffdd00'];
    particle.style.background = colors[Math.floor(Math.random() * colors.length)];

    document.querySelector('.particles').appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 6000);
}

// Create particles periodically
setInterval(createParticle, 2000);

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero h1');
const originalText = heroTitle.textContent;
heroTitle.textContent = '';

let index = 0;
function typeWriter() {
    if (index < originalText.length) {
        heroTitle.textContent += originalText.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 1000);
});

// Add hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-15px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click effects for buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.3)';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s ease-out';
        ripple.style.pointerEvents = 'none';

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const particles = document.querySelector('.particles');

    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    particles.style.transform = `translateY(${scrolled * 0.3}px)`;
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');

    // Animate skill tags sequentially
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach((tag, index) => {
        setTimeout(() => {
            tag.style.opacity = '0';
            tag.style.transform = 'translateY(20px)';
            tag.style.transition = 'all 0.3s ease';

            setTimeout(() => {
                tag.style.opacity = '1';
                tag.style.transform = 'translateY(0)';
            }, 50);
        }, index * 50);
    });
});

// Add mouse trail effect
let mouseTrail = [];
document.addEventListener('mousemove', (e) => {
    mouseTrail.push({
        x: e.clientX,
        y: e.clientY,
        time: Date.now()
    });

    // Keep only recent trail points
    mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 500);

    // Create trail particle
    if (Math.random() < 0.1) {
        const trailParticle = document.createElement('div');
        trailParticle.style.position = 'fixed';
        trailParticle.style.left = e.clientX + 'px';
        trailParticle.style.top = e.clientY + 'px';
        trailParticle.style.width = '3px';
        trailParticle.style.height = '3px';
        trailParticle.style.background = '#00ff88';
        trailParticle.style.borderRadius = '50%';
        trailParticle.style.pointerEvents = 'none';
        trailParticle.style.zIndex = '9999';
        trailParticle.style.opacity = '0.7';
        trailParticle.style.transition = 'all 0.5s ease-out';

        document.body.appendChild(trailParticle);

        setTimeout(() => {
            trailParticle.style.opacity = '0';
            trailParticle.style.transform = 'scale(0)';
            setTimeout(() => trailParticle.remove(), 500);
        }, 100);
    }
});