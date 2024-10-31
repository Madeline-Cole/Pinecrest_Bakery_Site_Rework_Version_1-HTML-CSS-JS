document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle menu on hamburger click
    menuIcon.addEventListener('click', function() {
        console.log('Menu clicked!');
        menuIcon.classList.toggle('change');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuIcon.contains(e.target) && navMenu.classList.contains('active')) {
            menuIcon.classList.remove('change');
            navMenu.classList.remove('active');
        }
    });
});