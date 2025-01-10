/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu"); //remove show menu when each nav link is clicked
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER SNEAKERS ===============*/
let swiperImages = new Swiper(".home_swiper", {
  loop: true,
  spaceBetween: 64,
  grabCursor: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let swiperTitles = new Swiper(".home_titles", {
  loop: true,
  spaceBetween: 64,
  grabCursor: true,
  centeredSlides: true,
});

swiperImages.controller.control = swiperTitles;
swiperTitles.controller.control = swiperImages;

/*=============== CHANGE BACKGROUND HEADER ===============*/
