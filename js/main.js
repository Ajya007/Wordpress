// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-nav");
const line1 = document.querySelector(".line1");

const line2 = document.querySelector(".line2");

const line3 = document.querySelector(".line3");
const navItems = document.querySelectorAll(".nav-links");

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  showMenu = !showMenu;
  if (showMenu) {
    menuBtn.classList.add("rotate");
    menu.classList.add("show");
    line1.classList.add("flip1");
    line2.classList.add("flip2");
    line3.classList.add("flip3");
    navItems.forEach((item) => item.classList.add("show"));

 
  }
   else {
    menuBtn.classList.remove("rotate");
    menu.classList.remove("show");
    line1.classList.remove("flip1");
    line2.classList.remove("flip2");
    line3.classList.remove("flip3");
    navItems.forEach((item) => item.classList.remove("show"));


  }
  navItems.forEach((item)=> item.addEventListener("click", toggleMenu));
  
}







 
