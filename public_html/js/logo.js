window.addEventListener('scroll', function() {
    var navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 50) { // Ajuste o valor conforme necessário
        navBar.classList.add('scrolled');
    } else {
         navBar.classList.remove('scrolled');
    }
});
