// проверка

//function hand() {
//  console.log('DO IT')
//}
//like.addEventListener('click', hand);

// РАБОЧАЯ функция для одного элемента

//const like = document.querySelectorAll(".photo__button");
//const likesNumber = document.querySelectorAll(".photo__like-number");
//like.onclick = function (evt) {
//  evt.preventDefault();
//  if (like.classList.contains('photo__button--like')) {
//    likesNumber.textContent--;
//  } else {
//    likesNumber.textContent++;
//  }
//  like.classList.toggle('photo__button--like');
//};

// Функция для всех ЭЛЕМЕНТОВ
let arrayNumber = [document.querySelectorAll(".photo__like-number")];


let arrayPhoto = [document.querySelectorAll(".photo__button")];

arrayPhoto.forEach((item, index) => {
  let currentItem;
  currentItem = item[index];
  currentItem.onclick = function () {
    if (currentItem.classList.contains('photo__button--like')) {
      console.log("Yes");
    } else {
      console.log("No")
    }
  }
}
)
