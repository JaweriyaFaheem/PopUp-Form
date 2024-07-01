const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const popup = document.querySelector('.popup1');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});

function letsPlay() {
    popup.classList.add('clickPlay')
}

function registerFirst() {
    popup.classList.remove('clickPlay')
}