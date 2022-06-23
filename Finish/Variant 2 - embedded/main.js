const form = document.querySelector(".js-newsletter--embedded");
const formProductsImage = document.querySelector(".newsletter__image-wrapper");

const showThankYou = (e) => {
  e.preventDefault();
  formProductsImage.classList.add("display-none");
};

form.addEventListener("submit", showThankYou);
