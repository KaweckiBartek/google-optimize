const signUpContainer = document.querySelector("#sign-up");
const thankYouContainer = document.querySelector("#thank-you");
const submitBtn = document.querySelector("#footer-newsletter");

const showThankYou = (e) => {
  e.preventDefault();
  signUpContainer.classList.add("display-none");
  thankYouContainer.classList.remove("display-none");
};

submitBtn.addEventListener("click", showThankYou);
