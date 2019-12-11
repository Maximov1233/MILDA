const carouselSlide  = document.querySelector('.carousel-slide'),
      carouselImages = document.querySelectorAll('.carousel-slide img'),
      prevBtn        = document.querySelector('.prevBtn'),
      nextBtn        = document.querySelector('.nextBtn'),
      size           = carouselImages[0].clientWidth;

let counter = 1;

carouselSlide.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = `transform 0.4s ease-in-out`;
    counter++;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'last') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length -2;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    } else if (carouselImages[counter].id === 'first') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = `translateX(${-size * counter}px)`;
    }
});

