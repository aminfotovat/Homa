let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let slideInterval;

const showSlide = (n) => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].classList.add('active');
}

const nextSlide = () => showSlide(currentSlide + 1);

const prevSlide = () => showSlide(currentSlide - 1);

const startSlideShow = () => slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

const stopSlideShow = () => clearInterval(slideInterval);

document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);

// Pause the slideshow when the mouse is over the slider
document.querySelector('.slider-container').addEventListener('mouseenter', stopSlideShow);

// Restart the slide show when the mouse leaves the slider
document.querySelector('.slider-container').addEventListener('mouseleave', startSlideShow);

// Show the first slide and start the slide show when the page loads
showSlide(currentSlide);
startSlideShow();