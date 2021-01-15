"use strict";

//////////////////////////////////////
//////////////////////////////////////
// // Animation with Gsap the main content

gsap.from(".about__image", {
  opacity: 0,
  duration: 1,
  y: -50,
  delay: 0.5,
  stragger: 0.6,
});
gsap.from(".btn-main", { duration: 1, delay: 2.6, y: 30, opacity: 0 });
gsap.from(".about__text_big", {
  duration: 1,
  delay: 1.4,
  opacity: 0,
  marginLeft: "200px",
});
gsap.from(".about__text_small", {
  duration: 1,
  delay: 2.2,
  opacity: 0,
  marginRight: "200px",
});

///////////////////////////////////////
// Event Propagation in Practice

document.querySelector(".nav__list").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});



///////////////////////////////////////
// Pop up section for SIGN IN //

const popup = document.querySelector(".popup");
const btnOpenModal = document.querySelector(".signInModal");
const btnCloseModal = document.querySelector(".closeBtn");

// btnOpenModal.addEventListener("click", function() {
//   popup.style.display = "block";
// // popup.classList.remove('hidden');   /// Remove new class
// })

// btnCloseModal.addEventListener("click", function() {
//   // popup.classList.add('hidden');    /// Adding new class
//   popup.style.display = "none";
//   })

const overlay = document.querySelector(".overlay");
const outsideClick = document.querySelector(".overlay");

const openPopup = function () {
  popup.style.display = "block";
};

const closePopuo = function () {
  popup.style.display = "none";
}

btnCloseModal.addEventListener("click", closePopuo)
btnOpenModal.addEventListener("click", openPopup);











// FUNCTION TO CLOSE MODAL IF OUTSIDE CLICK
// function outsideClick(e) {
//     if (e.target == popup) {
//       popup.style.display = 'none';
//     }

// }

// // GET MODAL ELEMENT FOR HAMBURGER MENU
// const hamburger = document.getElementById("hamburger");
// const navUL = document.getElementById("nav__mobile");

// // Hamburger menu on small screens open X close
// hamburger.addEventListener("click", () => {
//     navUL.classList.toggle("show");
// })
