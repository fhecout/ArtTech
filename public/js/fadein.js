
// Adicione este script no seu arquivo deslize.js

document.addEventListener('DOMContentLoaded', function() {
    const model2 = document.querySelector('.model2');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                model2.classList.add('fade-in');
            }
        });
    });

    observer.observe(model2);
});


// Adicione este script no seu arquivo deslize.js

document.addEventListener('DOMContentLoaded', function() {
    const model4 = document.querySelector('.model4');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                model4.classList.add('visible');
            }
        });
    });

    observer.observe(model4);
});


