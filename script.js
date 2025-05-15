
const darkModeIcon = document.querySelector('#darkmode-icon');
darkModeIcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
    });
});
