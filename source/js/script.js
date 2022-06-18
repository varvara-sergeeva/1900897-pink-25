// бургерное меню
let burgerToggle = document.querySelectorAll('.navigation__toggle');
let burgerMenu = document.querySelector('.navigation__menu');
let header = document.querySelector('.header');
let back = document.querySelector('.page');
let map = document.querySelector('.contact__map');

header.classList.remove('nojs');
burgerToggle.forEach(function (item) {
  item.addEventListener('click', function () {
    item.classList.toggle('navigation__toggle--active');
    burgerMenu.classList.toggle('menu--active');
    header.classList.toggle('header--active');
    back.classList.toggle('page--menu');
  })
});

map.classList.remove('nojs');

// слайдер для отзывов
const prev = document.querySelector('.reviews__previous');
const next = document.querySelector('.reviews__next');
const slides = document.querySelectorAll('.reviews__item.slider__item');
const toggles = document.querySelectorAll('.reviews__toggles > .slider__toggle');
let index = 0;

const currentSlide = n => {
  for(let slide of slides) {
    slide.classList.remove('slider__item--current');
  }
  slides[n].classList.add('slider__item--current');
}

const currentToggle = n => {
  for(let dot of toggles) {
    dot.classList.remove('slider__toggle--current');
  }
  toggles[n].classList.add('slider__toggle--current');
}

const nextSlide = () => {
  if(index == slides.length - 1) {
    index = 0;
    currentSlide(index);
    currentToggle(index);
  } else {
    index++;
    currentSlide(index);
    currentToggle(index);
  }
}

const prevSlide = () => {
  if(index == 0) {
    index = slides.length - 1;
    currentSlide(index);
    currentToggle(index);
  } else {
    index--;
    currentSlide(index);
    currentToggle(index);
  }
}

toggles.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    currentSlide(index);
    currentToggle(index);
  })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

//Лайки для галереи

let like = document.querySelectorAll(".photo__like-link");
let likesNumber = document.querySelectorAll(".photo__like-number");

like.onclick = function (evt) {
  evt.preventDefault();
  if (like.classList.contains('activelike')) {
    likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle('activelike');
};

//POP-UP в доработке
let popup = document.querySelectorAll(".popup");
let error = document.querySelector(".popup--error");
let confirm = document.querySelector(".popup--confirm");
let close = document.querySelector(".button--form");
let required = document.querySelectorAll(".required");
const form = document.getElementById("bigform");

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  console.log("Работает!");
  }
);

//закрытие popup
close.addEventListener("click", function(evt){
  evt.preventDefault();
  error.classList.remove("popup-show");
  confirm.classList.remove("popup-show");
});

//закрытие с клавиатуры
window.addEventListener("keydown", function(evt) {
  if (evt.key === 'Escape') {
    if(popup.classList.contains("popup-show")) {
      evt.preventDefault();
      popup.classList.remove("popup-show");
    }
  }
});
