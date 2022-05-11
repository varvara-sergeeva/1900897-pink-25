let burgerToggle = document.querySelectorAll('.navigation__toggle');
let burgerMenu = document.querySelector('.navigation__menu');
let header = document.querySelector('.header');
let back = document.querySelector('.page');

header.classList.remove('nojs');

burgerToggle.forEach(function (item) {
  item.onclick = function () {
    item.classList.toggle('active');
    burgerMenu.classList.toggle('active');
    header.classList.toggle('active');
    back.classList.toggle('lock');
  }
});
