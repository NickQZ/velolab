document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (window.scrollY > 10) {
            button.classList.remove('hidden');
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
            button.classList.add('hidden');
        }
    };

    // Smooth scroll back to top of page
    button.onclick = function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
