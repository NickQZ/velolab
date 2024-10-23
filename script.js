function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}


// Auto play video
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (window.scrollY > 200) {
            button.classList.remove('hidden');
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
            button.classList.add('hidden');
        }
    };


// Embed email
const mailtoButton = document.getElementById('email');

mailtoButton.addEventListener('click', function() {
    const email = 'enquiries@velolab.co.nz';
    const subject = encodeURIComponent('Velolab Inquiry');
    const body = encodeURIComponent('I would like to inquire about...'); 

    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
});

    // Smooth scroll back to top of page
    button.onclick = function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

});
