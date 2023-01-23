const menuEmail = document.querySelector(".navbar-email");
const dskMenu = document.querySelector(".dsk-menu");
const imgMenu = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);
imgMenu.addEventListener("click", toggleMobileMenu);


function toggleDesktopMenu(){
    dskMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}

