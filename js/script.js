// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 60, // Adjust offset for fixed navbar
            behavior: 'smooth'
        });
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('header.navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Navbar burger icon toggle for mobile view
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.querySelector('#navbarNav');
    navbarCollapse.classList.toggle('show');
});

// Fade-in animation for sections when they enter view
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

sections.forEach(section => observer.observe(section));
