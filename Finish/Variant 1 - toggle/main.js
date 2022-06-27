const signUpToggleForm = document.querySelector(".newsletter--popup");
const openButton = document.querySelector(".newsletter--popup-open-btn");
const closeButton = document.querySelector(".newsletter--popup__close-button");
const isModalShown = sessionStorage.getItem("alreadyShow");

const showFormPopUp = () => {
  signUpToggleForm.classList.remove("hidden");
  signUpToggleForm.classList.add("visible");
  openButton.classList.remove("fade-in-down");
  openButton.classList.add("fade-out-up");
  sessionStorage.setItem("alreadyShow", "alredy shown");
};

const closeFormPopUp = () => {
  signUpToggleForm.classList.add("hidden");
  openButton.classList.remove("fade-out-up");
  openButton.classList.add("fade-in-down");
};

const showModalFirstTime = () => {
  if (isModalShown !== "alredy shown") {
    window.setTimeout(() => showFormPopUp(), 5000);
  }
};

openButton.addEventListener("click", showFormPopUp);
closeButton.addEventListener("click", closeFormPopUp);

if (document.readyState !== "loading") {
  showModalFirstTime();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    showModalFirstTime();
  });
}
