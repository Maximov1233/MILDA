// slider

const reviewWindow = document.querySelector('.reviews-list'),
      reviews      = document.querySelectorAll('.review-window .review'),
      prevBtn      = document.querySelector('.left-arrow'),
      nextBtn      = document.querySelector('.right-arrow'),
      size         = reviews[0].clientWidth;

let counter = 1;

//reviewWindow.style.transform = `translateX(${-size * counter}px)`;

nextBtn.addEventListener('click', () => {
    
    // if (counter >= reviews.length) return;
    reviewWindow.style.transition = `transform 0.4s ease-in-out`; 
    
    reviewWindow.style.transform = `translateX(${-size * counter}px)`;
    reviews.forEach((review) => {
        review.style.zIndex = ``;
    });
    reviews[counter].style.zIndex = `99`;
    counter++;
});

prevBtn.addEventListener('click', () => {
    // if (counter <= 0) return;
    reviewWindow.style.transition = `transform 0.4s ease-in-out`;
    counter--;
    reviewWindow.style.transform = `translateX(${size * (-counter + 1)}px)`;
    reviews.forEach((review) => {
        review.style.zIndex = ``;
    });
    reviews[counter - 1].style.zIndex = `99`; 
});


// reviewWindow.addEventListener('transitionend', () => {
    
//     if (reviews[counter].id === 'last') {
//         reviewWindow.style.transition = 'none';
//         counter = reviews.length -2;
//         reviewWindow.style.transform = `translateX(${-size * counter}px)`;
//     } else if (reviews[counter].id === 'first') {
//         reviewWindow.style.transition = 'none';
//         counter = reviews.length - counter;
//         reviewWindow.style.transform = `translateX(${-size * counter}px)`;
//     }
// });

// modal close

const modalBg = document.querySelector('.header-modal__bg'),
      modal = modalBg.querySelector('.header-modal'),
      modalClose = modal.querySelector('.modal-close'),
      modalOpeners = document.querySelectorAll('.modal-opener');

modalOpeners.forEach((opener) => {
    opener.addEventListener('click', () => {
        document.body.classList.add('ov-h');
        modalBg.classList.remove('hide'); 
    });
});

modalClose.addEventListener('click', () => {
    modalBg.classList.add('hide');
    document.body.classList.remove('ov-h');
});

modalBg.addEventListener('click', () => {
    modalBg.classList.add('hide');
    document.body.classList.remove('ov-h');
});

const scroll = new SmoothScroll('.header-nav__item a' ,  {
    speed: 400
});

    

