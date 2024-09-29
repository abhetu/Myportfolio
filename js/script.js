// Smooth scrolling for navbar links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
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
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('header.navbar');
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');  // Add the "scrolled" class when the user scrolls down
    } else {
        navbar.classList.remove('scrolled');  // Remove the "scrolled" class when the user is at the top
    }
});

// Navbar burger icon toggle for mobile view
document.querySelector('.navbar-toggler').addEventListener('click', function() {
    var navbarCollapse = document.querySelector('#navbarNav');
    navbarCollapse.classList.toggle('show');  // Toggle the 'show' class for opening and closing the navbar in mobile view
});
