function slowScrollTo(element) {
    var targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var duration = 1000; // duração da rolagem em milissegundos (5 segundos)
    var start = null;

    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        var currentPosition = startPosition + (distance * (progress / duration));
        window.scrollTo(0, currentPosition);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        } else {
            window.scrollTo(0, targetPosition);
        }
    });
}

document.getElementById('link-empresa').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    slowScrollTo(document.querySelector('#empresa'));
});

document.getElementById('link-contato').addEventListener('click', function(e) {
    e.preventDefault(); // Impede o comportamento padrão do link
    slowScrollTo(document.querySelector('#contato'));
});
