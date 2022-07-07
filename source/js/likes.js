// РАБОЧАЯ функция для одного элемента
//const like = document.querySelector(".photo__button");
//const likesNumber = document.querySelector(".photo__like-number");
//like.onclick = function (evt) {
//  evt.preventDefault();
//  if (like.classList.contains('photo__button--like')) {
//    likesNumber.textContent--;
//  } else {
//    likesNumber.textContent++;
//  }
//  like.classList.toggle('photo__button--like');
//};

let arrayLikes = [document.querySelectorAll(".photo__button")];
let arrayNumber = [document.querySelectorAll(".photo__like-number")];
let chekedLikes = [document.querySelectorAll(".photo__button--like")];
let numberOfLikes = 0;

document.querySelectorAll(".photo__button").forEach((element) => {
  element.addEventListener('click', function () {
    this.classList.toggle('photo__button--like');
    if (element.classList.contains('photo__button--like')) {
    for(n in arrayNumber) {
      for(i in arrayLikes) {
        if (n === i) {
          document.querySelectorAll(".photo__like-number").forEach((item) => {
            if (chekedLikes = true) {
            item.textContent++;
            }
          })

        }
      }
    }
  } else {
    document.querySelectorAll(".photo__like-number").forEach((item) => {
      item.textContent--;
    })
  }
  });
});

//! добавляется лайк, но количество не отображается. Переменная numberOfLikes работает как надо для количества
//document.querySelectorAll(".photo__button").forEach((element) => {
//  element.addEventListener('click', function () {
//    this.classList.toggle('photo__button--like');
//    numberOfLikes = 0;
//    if (element.classList.contains('photo__button--like')) {
//    console.log('have class');
//    for(n in arrayNumber) {
//      for(i in arrayLikes) {
//        if (n === i) {
//          console.log("yae");
//          numberOfLikes++;
//          console.log(numberOfLikes);
//        }
//      }
//    }
//  } else {
//    console.log('no class');
//    numberOfLikes--;
//    console.log(numberOfLikes);
//  }
//  });
//});


//! кол-во увеличивается везде и не уменьшается нигде
//document.querySelectorAll(".photo__button").forEach((element) => {
//  element.addEventListener('click', function () {
//    this.classList.toggle('photo__button--like');
//    if (element.classList.contains('photo__button--like')) {
//      numberOfLikes = true;
//      document.querySelectorAll(".photo__like-number").forEach((item) => {
//        if(numberOfLikes = true) {
//          item.textContent++;
//        } else {
//          item.textContent--;
//        }
//      });
//  } else {
//    numberOfLikes = false;
//  }
//  });
//});

//document.querySelectorAll(".photo__like-number").forEach((item) => {
//  item.addEventListener('click', function () {
//    if(numberOfLikes = true) {
//      item.textContent++;
//    } else {
//      item.textContent--;
//    }
//  });
//});

//! кол-во увеличивается и уменьшается везде
//document.querySelectorAll(".photo__button").forEach((element) => {
//  element.addEventListener('click', function () {
//    this.classList.toggle('photo__button--like');
//    numberOfLikes = 0;
//    if (element.classList.contains('photo__button--like')) {
//    console.log('have class');
//    for(n in arrayNumber) {
//      for(i in arrayLikes) {
//        if (n === i) {
//          console.log("yae");
//          numberOfLikes++;
//          console.log(numberOfLikes);
//          document.querySelectorAll(".photo__like-number").forEach((item) => {
//            item.textContent++;
//          })
//        }
//      }
//    }
//  } else {
//    console.log('no class');
//    numberOfLikes--;
//    console.log(numberOfLikes);
//    document.querySelectorAll(".photo__like-number").forEach((item) => {
//      item.textContent--;
//    })
//  }
//  });
//});
