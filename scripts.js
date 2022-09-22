const btnMenuOpen = document.getElementById("btn_open");
const main = document.getElementById("main");
const menu = document.getElementById("menu");
const btnMenuClose = document.getElementById("btn_close")
const navOpen = document.getElementById("nav")

btnMenuOpen.addEventListener("click", function() {
    main.classList.add("main_open");
    menu.classList.add("menu_open");
    navOpen.classList.add("nav__open");
    navOpen.classList.remove("nav__close");
});

btnMenuClose.addEventListener("click", function() {
    main.classList.remove("main_open");
    menu.classList.remove("menu_open");
    navOpen.classList.remove("nav__open");
    navOpen.classList.add("nav__close");
});
