document.addEventListener('DOMContentLoaded', () => {
    

    // Add click event to the hero section for redirection
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('click', () => {
        window.location.href = 'main.html'; // Replace 'main.html' with your desired page URL
    });
});
