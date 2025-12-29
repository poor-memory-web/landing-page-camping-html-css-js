const navBtn = document.querySelector(".nav-btn");
const mobileMenu = document.querySelector(".mobile-menu-login");

let navOpen = false;

navBtn.addEventListener("click", function () {
  if (navOpen == true) {
    navBtn.classList.remove("nav-btn--open");
    mobileMenu.style.left = "-25rem";
    navOpen = false;
  } else {
    navBtn.classList.add("nav-btn--open");
    mobileMenu.style.left = "0rem";
    navOpen = true;
  }
});
