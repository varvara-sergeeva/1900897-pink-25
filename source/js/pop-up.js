let popup = document.querySelectorAll(".popup");
let error = document.querySelector(".popup--error");
let confirm = document.querySelector(".popup--confirm");
let close = document.querySelector(".button--form");
let required = document.querySelectorAll(".required");
const form = document.getElementById("bigform");

form && form.addEventListener("submit", function(evt) {
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
