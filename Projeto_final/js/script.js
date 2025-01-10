document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.carousel-slides figure');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const totalSlides = slides.length;
  let currentSlide = 0;

  const updateCarousel = () => {
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;
  };

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
  });

  // Initialize the carousel
  updateCarousel();
});
