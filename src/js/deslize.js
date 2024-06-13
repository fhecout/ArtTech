document.getElementById('link-empresa').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    document.querySelector('#empresa').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('link-contato').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    document.querySelector('#contato').scrollIntoView({
        behavior: 'smooth'
    });
});