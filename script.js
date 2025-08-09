// --- Mobile Menu Toggle ---
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('is-active');
}

// --- Tab Functionality for Education Section ---
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove('active');
    }
    const tablinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- Tab Functionality for Showcase Section ---
function openShowcaseTab(evt, tabName) {
    const showcaseContent = document.getElementsByClassName("showcase-content");
    for (let i = 0; i < showcaseContent.length; i++) {
        showcaseContent[i].classList.remove('active');
    }
    const showcaseTabs = document.getElementsByClassName("showcase-tab");
    for (let i = 0; i < showcaseTabs.length; i++) {
        showcaseTabs[i].classList.remove('active');
    }
    document.getElementById(tabName).classList.add('active');
    evt.currentTarget.classList.add('active');
}

// --- Go to Top Button ---
const goToTopBtn = document.getElementById('goToTopBtn');
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        goToTopBtn.classList.add('show');
    } else {
        goToTopBtn.classList.remove('show');
    }
});

// ADDED THIS EVENT LISTENER
goToTopBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevents the default anchor link behavior
    window.scrollTo({
        top: 0, // Scroll to the absolute top of the page
        behavior: 'smooth' // Use a smooth scrolling animation
    });
});


// --- Scroll Animations ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach((el) => observer.observe(el));

// --- Initial Setup on DOM Load ---
document.addEventListener('DOMContentLoaded', () => {
    // Set the default active tabs
    if (document.querySelector('.tab-link')) {
        document.querySelector('.tab-link').classList.add('active');
        document.getElementById('bachelors').classList.add('active');
    }
    
    if (document.querySelector('.showcase-tab')) {
        document.querySelector('.showcase-tab').classList.add('active');
        document.getElementById('showcaseProjects').classList.add('active');
    }

    // Initialize Particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": { "enable": true, "value_area": 800 }
                },
                "color": { "value": "#7c3aed" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true, "distance": 150,
                    "color": "#334155", "opacity": 0.4, "width": 1
                },
                "move": {
                    "enable": true, "speed": 2, "direction": "none",
                    "random": false, "straight": false, "out_mode": "out", "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": { "enable": true, "mode": "grab" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 140, "line_linked": { "opacity": 1 } },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});