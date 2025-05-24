// js
const mobileBtn = document.querySelector(".mobile_click_btn");
const asidebar = document.querySelector(".nav_links");

const closebtn = document.querySelector(".close_slider");

mobileBtn.onclick = function handleClick() {
  asidebar.classList.add("showbar");
};

closebtn.onclick = function handleClose() {
  asidebar.classList.remove("showbar");
};
