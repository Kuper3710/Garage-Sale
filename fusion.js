const menuEmail = document.querySelector(".navbar-email");
const dskMenu = document.querySelector(".dsk-menu");

menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
    dskMenu.classList.toggle("inactive");
}