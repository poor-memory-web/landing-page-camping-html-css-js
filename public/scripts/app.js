const navBtn = document.querySelector(".nav-btn");

let navOpen = false;

navBtn.addEventListener("click", function () {
  if (navOpen == true) {
    navBtn.classList.remove("nav-btn--open");
    navOpen = false;
  } else {
    navBtn.classList.add("nav-btn--open");
    navOpen = true;
  }
});
