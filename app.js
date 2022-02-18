const navBtn = document.getElementById("nav_btn");
const navbar = document.getElementById("nav_bar");
const navClose = document.getElementById("nav_close");

navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});
