const signUpPopUp = document.querySelectorAll(".sign-up");
const registerButton = document.querySelector("header .nav .last.leaf");
const closeButton = document.querySelector(".form-modal .close-button");
const isModalShown = sessionStorage.getItem("alreadyShow");
const isLoggedIn = document.body.classList.contains("logged-in");
const hiddenPregnatMotherContent = document.querySelector(
  ".field-group-div.enrollgrp-new"
);
const hiddenMotherWithBabyContent = document.querySelector(
  ".field-group-div.enrollgrp-old"
);
const isPregnatInput = document.querySelector(
  ".field-name-field-enroll-pregnant-mother input[value='Y']"
);
const hasChildrenInput = document.querySelector(
  ".field-name-field-enroll-mother-with-baby input[value='Yes']"
);
const formInputs = document.querySelectorAll(
  "form.enrollment-form-indiaenfamama .form-type-radio input, form.enrollment-form-indiaenfamama .form-type-checkbox input"
);

const showFormPopUp = () => {
  signUpPopUp.forEach((el) => el.classList.remove("display-none"));
  sessionStorage.setItem("alreadyShow", "alredy shown");
};

const closeFormPopUp = () => {
  signUpPopUp.forEach((el) => el.classList.add("display-none"));
};

const showModalFirstTime = () => {
  if (isModalShown !== "alredy shown") {
    window.setTimeout(() => showFormPopUp(), 5000);
  }
};

const changeInputStyle = () => {
  formInputs.forEach((input) => {
    if (input.checked) {
      input.closest(".form-item").classList.add("active");
    } else {
      input.closest(".form-item").classList.remove("active");
    }
  });
};

const inputFunction = () => {
  showHidenContent();
  changeInputStyle();
};

const showHidenContent = () => {
  if (hasChildrenInput.checked) {
    hiddenMotherWithBabyContent.classList.remove("hidden");
  } else {
    hiddenMotherWithBabyContent.classList.add("hidden");
  }

  if (isPregnatInput.checked) {
    hiddenPregnatMotherContent.classList.remove("hidden");
  } else {
    hiddenPregnatMotherContent.classList.add("hidden");
  }
};

if (!isLoggedIn) {
  registerButton.innerHTML = `<a
  class="join-enfamil jquery-once-20-processed register-btn"
  >Register account</a
  >
  `;
  registerButton.addEventListener("click", showFormPopUp);
  window.addEventListener("DOMContentLoaded", () => {
    showModalFirstTime();
  });
}

closeButton.addEventListener("click", closeFormPopUp);
formInputs.forEach((input) => input.addEventListener("change", inputFunction));
