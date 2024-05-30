let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const newTransform = `translateX(-${currentIndex * 300/ totalSlides}%)`;
    document.querySelector('.carousel-images').style.transform = newTransform;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 5000); 
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setTimeout(autoSlide, 5000);
});
