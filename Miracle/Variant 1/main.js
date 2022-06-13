const signUpPopUp = document.querySelectorAll(".sign-up");
const thankYouContainer = document.querySelector("#thank-you");
const form = document.querySelector(".form-modal .newsletter-form");
const registerButton = document.querySelector("header .nav .last.leaf");
const closeButton = document.querySelector(".form-modal .close-button");
const isModalShown = sessionStorage.getItem("alreadyShow");

const showThankYou = (e) => {
  e.preventDefault();
  closeFormPopUp();
  thankYouContainer.classList.remove("display-none");
};

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

form.addEventListener("submit", showThankYou);
registerButton.addEventListener("click", showFormPopUp);
closeButton.addEventListener("click", closeFormPopUp);
window.addEventListener("DOMContentLoaded", () => {
  showModalFirstTime();
});
