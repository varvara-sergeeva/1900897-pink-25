document.addEventListener("DOMContentLoaded", () => {

  let popupError = document.querySelector(".popup--error");
  let popupConfirm = document.querySelector(".popup--confirm");
  let closePopup = document.querySelectorAll(".button--close");
  let required = document.querySelectorAll(".required");
  const form = document.getElementById("bigform");

  form && form.addEventListener("submit", formSend);

  async function formSend(evt) {
    evt.preventDefault();
    let error = formVaidate(form);
    if (error === 0) {
      formConfirm();
      form.reset();
    } else {
      formError();
    }
  }

  function formVaidate(form) {
    let error = 0;

    for (let index = 0; index < required.length; index++) {
      const input = required[index];
      inputRemoveError(input);

      if(input.value === "") {
        inputAddError(input);
        error++;
      }
    }

    function inputAddError(input) {
      input.classList.add("form--error");
    }

    function inputRemoveError(input) {
      input.classList.remove("form--error");
    }

    return error;
  }

  function formError() {
    popupError.classList.add("popup-show");
  }

  function formConfirm() {
    popupConfirm.classList.add("popup-show");
  }

  closePopup.forEach (btn => {
    btn.addEventListener("click", () => {
      popupError.classList.remove("popup-show");
      popupConfirm.classList.remove("popup-show");
    })
  })

  document.addEventListener("keydown", function(evt) {
    if (evt.key === 'Escape') {
      popupError.classList.remove("popup-show");
      popupConfirm.classList.remove("popup-show");
    }
  });
})
