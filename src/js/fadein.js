
document.addEventListener("DOMContentLoaded", function() {
    const model2Section = document.querySelector('.model2');

    function handleScroll() {
        const sectionPosition = model2Section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
            model2Section.classList.add('fade-in');
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

