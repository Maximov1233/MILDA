// slider

const reviewWindow = document.querySelector('.reviews-list'),
      reviews      = document.querySelectorAll('.review-window .review'),
      prevBtn      = document.querySelector('.left-arrow'),
      nextBtn      = document.querySelector('.right-arrow'),
      size         = reviews[0].clientWidth;

let counter = 1;

nextBtn.addEventListener('click', () => {
    if (counter >= reviews.length) return;
    reviewWindow.style.transition = `transform 0.4s ease-in-out`; 
    
    reviewWindow.style.transform = `translateX(${-size * counter}px)`;
    reviews.forEach((review) => {
        review.style.zIndex = ``;
    });
    reviews[counter].style.zIndex = `99`;
    counter++;
});

prevBtn.addEventListener('click', () => {
    if (counter == 1) return;
    reviewWindow.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    reviewWindow.style.transform = `translateX(${size * (-counter + 1)}px)`;
    reviews.forEach((review) => {
        review.style.zIndex = ``;
    });
    reviews[counter - 1].style.zIndex = `99`;
});

// modal

const modalBg      = document.querySelector('.header-modal__bg'),
    modal          = modalBg.querySelector('.header-modal'),
    modalClose     = modal.querySelector('.modal-close'),
    modalLinks     = modal.querySelectorAll('ul li'),
    modalOpeners   = document.querySelectorAll('.modal-opener');


const scroll = new SmoothScroll('.header-nav__item a' , {
    speed: 400
});

modalOpeners.forEach((opener) => {
    opener.addEventListener('click', () => {
        // document.body.classList.add('ov-h');
        modalBg.classList.remove('hide');
        modalBg.classList.add('visible');
        setTimeout(() => {
            modal.classList.remove('zoomIn');
        }, 900); 
       
    });
});

modalLinks.forEach((link) => {
    link.addEventListener('click', () => {
        modalBg.classList.add('hide');
        document.body.classList.remove('ov-h');
    });
});

modalClose.addEventListener('click', () => {
    modal.classList.add('zoomOut');
    setTimeout(() => {
        modalBg.classList.add('hide');
        document.body.classList.remove('ov-h');
        modal.classList.remove('zoomOut');
        modal.classList.add('zoomIn');
    }, 500);
    
});

document.addEventListener('click', (elem) => {
    let target = elem.target;
    if (target == modalBg && !modalBg.classList.contains('hide')) {
        modal.classList.add('zoomOut');
        setTimeout(() => {
            modalBg.classList.add('hide');
            document.body.classList.remove('ov-h');
            modal.classList.remove('zoomOut');
            modal.classList.add('zoomIn');
        }, 500);
    }
}); 