// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript is working!');

    // Toggle Menu
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    document.querySelector('.hamburger-menu').addEventListener('click', () => {
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    });

    // Back to Top Button
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

    // Email Button
    const mailtoButton = document.getElementById('email');
    mailtoButton.addEventListener('click', function() {
        const email = 'enquiries@velolab.co.nz';
        const subject = encodeURIComponent('Velolab Inquiry');
        const body = encodeURIComponent('I would like to inquire about...'); 
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    });

    // Smooth Scroll Back to Top
    button.onclick = function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
