// временное название классов для слайдеров
const slide1 = document.querySelectorAll('.slider1');
const slide2 = document.querySelectorAll('.slider2');
const slide3 = document.querySelectorAll('.slider3');
const tableSliders = [slide1, slide2, slide3];
const togglesTable = document.querySelectorAll('.rate__toggles > .slider__toggle');
let mark = 0;

//изменение переключателя (работает)
const crntToggle = b => {
  for(let ball of togglesTable) {
    ball.classList.remove('slider__toggle--current');
  }
  togglesTable[b].classList.add('slider__toggle--current');
}

//прокрутка слайда (в доработке)
const actualSlide = r => {
  for(let rate of tableSliders) {
    rate.classList.remove('slider__table--current');
  }
  tableSliders[r].classList.add('slider__table--current');
}

togglesTable.forEach((i, indexBall) => {
  i.addEventListener('click', () => {
    mark = indexBall;
    crntToggle(mark);
    actualSlide(mark);
  })
})
