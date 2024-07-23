const navToggler = document.querySelector(".nav-toggler");
const navbar = document.querySelector(".navbar");
navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
