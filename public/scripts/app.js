const navBtn = document.querySelector(".nav-btn");
const mobileMenu = document.querySelector(".mobile-menu-login");
const menuLinks = document.querySelectorAll(".menu__link");

let navOpen = false;

navBtn.addEventListener("click", () => {
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

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLinks.forEach((l) => l.classList.remove("menu__link--active"));
    link.classList.add("menu__link--active");
  });
});
