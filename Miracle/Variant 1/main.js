const signUpPopUp = document.querySelectorAll(".sign-up");
const thankYouContainer = document.querySelector("#thank-you");
const form = document.querySelector(".newsletter-form");
const registerButton = document.querySelector("header .nav .last.leaf");
const closeButton = document.querySelector(".close-button");

const showThankYou = (e) => {
  e.preventDefault();
  signUpPopUp.classList.add("display-none");
  thankYouContainer.classList.remove("display-none");
};

const showFormPopUp = () => {
  signUpPopUp.forEach((el) => el.classList.remove("display-none"));
};

const closeFormPopUp = () => {
  signUpPopUp.forEach((el) => el.classList.add("display-none"));
};

form.addEventListener("submit", showThankYou);
registerButton.addEventListener("click", showFormPopUp);
closeButton.addEventListener("click", closeFormPopUp);
