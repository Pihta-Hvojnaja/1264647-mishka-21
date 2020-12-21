const mainNav = document.querySelector('.main-nav');
const toggleNav = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');
mainNav.classList.add('main-nav--closed');

toggleNav.addEventListener('click', function(evt) {
  evt.preventDefault();

  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');
  }
});

// слайдер на Index
const main = document.querySelector('.page-main');

if (main.classList.contains('page-main--index')) {
  const reviews = document.querySelector('.reviews');
  const slides = reviews.querySelectorAll('.slider__item');
  const sliderButtons = reviews.querySelectorAll('.slider__btn');

  sliderButtons[1].addEventListener('click', function(evt) {
    evt.preventDefault();

    for (let j = 0; j < slides.length; j++) {

      if (slides[j].classList.contains('slider__item--visible') && j < slides.length - 1) {
        slides[j+1].classList.add('slider__item--visible');
        slides[j].classList.remove('slider__item--visible');
        break;

      } else if (slides[j].classList.contains('slider__item--visible') && j === slides.length - 1) {
        slides[0].classList.add('slider__item--visible');
        slides[j].classList.remove('slider__item--visible');
        break;
      }
    }
  });

  sliderButtons[0].addEventListener('click', function(evt) {
    evt.preventDefault();

    for (let j = 0; j < slides.length; j++) {

      if (slides[j].classList.contains('slider__item--visible') && j > 0) {
        slides[j-1].classList.add('slider__item--visible');
        slides[j].classList.remove('slider__item--visible');
        break;

      } else if (slides[j].classList.contains('slider__item--visible') && j === 0) {
        slides[slides.length - 1].classList.add('slider__item--visible');
        slides[j].classList.remove('slider__item--visible');
        break;
      }
    }
  });
}

// модальное окно
const pageBody = document.querySelector('.page-body');

if (main.classList.contains('page-main--modal')) {
  const modal = pageBody.querySelector('.modal');

  window.addEventListener ('keydown', function(evt) {
    if (evt.keyCode === 27) {
      modal.classList.remove('modal--show');
    }
  });

  if (main.querySelector('.featured__button')) {
    let orderButton = main.querySelector('.featured__button');

    orderButton.addEventListener ('click', function(evt) {
      evt.preventDefault();

      modal.classList.add('modal--show');
    });
  }

  if (main.querySelector('.cart__svg--catalog')) {
    const orderButtons = main.querySelectorAll('.cart__svg--catalog');

    for (let i = 0; i < orderButtons.length; i++) {
      orderButtons[i].addEventListener ('click', function(evt) {
        evt.preventDefault();

        modal.classList.add('modal--show');
      });
    }
  }
}
