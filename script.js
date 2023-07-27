document.addEventListener('DOMContentLoaded',  () => {
    
    setTimeout(function () {
        var firstImage = document.getElementById("firstImage");
        var secondImage = document.getElementById("secondImage");

        firstImage.style.left = "-50%";
        /* Move the first image to the left */
        /*firstImage.style.opacity = "0";*/

        secondImage.style.left = "50%";
        /* Move the second image to the center of the container */
        secondImage.style.opacity = "1";
    }, 3000);
    // Add click event to the hero section for redirection
    const heroSection = document.getElementById('hero');
    heroSection.addEventListener('click', () => {
        window.location.href = 'main.html'; // Replace 'main.html' with your desired page URL
    });
});
