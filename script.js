let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0 } // Reset to first slide
    slides[slideIndex].style.display = "block"; // Show the current slide
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0 } // Loop back to the first slide
    if (slideIndex < 0) { slideIndex = slides.length - 1 } // Loop to the last slide
    showSlidesManually();
}

function showSlidesManually() {
    let i;
    const slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }
    slides[slideIndex].style.display = "block"; // Show the current slide
}

// Initialize the first slide
showSlides();

// Add loading state to search button when form is submitted
document.querySelector('.search-form').addEventListener('submit', function(e) {
    const searchButton = this.querySelector('.search-button');
    searchButton.classList.add('loading');
    // Remove loading class after search completes (simulate with timeout)
    setTimeout(() => {
        searchButton.classList.remove('loading');
    }, 2000);
});