let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(n) {
    slideIndex = n;
    if (slideIndex >= totalSlides) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = totalSlides - 1; }
    
    // Hide all images
    slides.forEach(slide => slide.style.display = 'none');
    
    // Show current image
    slides[slideIndex].style.display = 'block';
}

function moveSlide(n) {
    showSlide(slideIndex + n);
}

// Auto advance
setInterval(() => {
    moveSlide(1);
}, 4000);

// Initial display
showSlide(0);
