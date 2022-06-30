const prev = document.querySelector('.reviews__previous');
const next = document.querySelector('.reviews__next');
const slides = document.querySelectorAll('.reviews__item.slider__item');
const toggles = document.querySelectorAll('.reviews__toggles > .slider__toggle');
let index = 0;

//смещение соотв слайда
const currentSlide = n => {
  for(let slide of slides) {
    slide.classList.remove('slider__item--current');
  }
  slides[n].classList.add('slider__item--current');
}

// изменение размера точки
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
