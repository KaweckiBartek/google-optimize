const signUpPopUp = document.querySelectorAll(
  ".newsletter--popup, .newsletter--popup-backdrop"
);
const registerButton = document.querySelector("header .nav .last.leaf");
const closeButton = document.querySelector(".newsletter--popup__close-button");
const isModalShown = sessionStorage.getItem("alreadyShow");
// const isLoggedIn = document.body.classList.contains("logged-in");

const showFormPopUp = () => {
  signUpPopUp.forEach((el) => {
    el.classList.remove("hidden");
    el.classList.add("visible");
  });
  window.document.body.classList.add("scroll--prevent");
  sessionStorage.setItem("alreadyShow", "alredy shown");
};

const closeFormPopUp = () => {
  signUpPopUp.forEach((el) => el.classList.add("hidden"));
  window.document.body.classList.remove("scroll--prevent");
};

const showModalFirstTime = () => {
  if (isModalShown !== "alredy shown") {
    window.setTimeout(() => showFormPopUp(), 5000);
  }
};

// registerMobileButton.addEventListener("click", showFormPopUp);
window.addEventListener("DOMContentLoaded", () => {
  showModalFirstTime();
});

closeButton.addEventListener("click", closeFormPopUp);
