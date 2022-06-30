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

// Функция для всех ЭЛЕМЕНТОВ (но работает первый)
//let arrayNumber = [document.querySelectorAll(".photo__like-number")];
//let arrayPhoto = [document.querySelectorAll(".photo__button")];

//arrayPhoto.forEach((item, index) => {
//  let currentItem;
//  currentItem = item[index];
//  currentItem.onclick = function () {
//    if (currentItem.classList.contains('photo__button--like'), index) {
//      console.log("Yes");
//    } else {
//      console.log("No")
//    }
//  }
//}
//)


// простой цикл
//let arrayNumber = [document.querySelectorAll(".photo__like-number")];
//let arrayPhoto = [document.querySelectorAll(".photo__button")];

//function bgChange() {
//  console.log("Boooo");
//}

//arrayPhoto.forEach(function(item) {
//  console.log(item);
//  item.onclick = alert('Hello, this is my old-fashioned event handler!');
//})

//for (let index = 0; index < arrayPhoto.length; index++) {
//  arrayPhoto[index].onclick = bgChange;

//}

//! попытка 6
let arrayNumber = [document.querySelectorAll(".photo__like-number")];
let arrayPhoto = [document.querySelectorAll(".photo__button")];

arrayPhoto.forEach((item, index) => {
  item.onclick = function () {
    colorChange(index);
  }
})

function colorChange () {
  let currentTarget = arrayPhoto[index]
  if (currentTarget.classList.contains('photo__button--like')) {
    console.log("Yes");
  } else {
    console.log("No")
  }
}

function numberChange () {

}
