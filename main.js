document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    
    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent event bubbling
        console.log('Menu clicked!');
        this.classList.toggle('change');
        navMenu.classList.toggle('active');
    });
});