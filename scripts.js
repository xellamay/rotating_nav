const btnMenuOpen = document.getElementById("btn_open");
const main = document.getElementById("main");
const menu = document.getElementById("menu");
const btnMenuClose = document.getElementById("btn_close")

btnMenuOpen.addEventListener("click", function() {
    main.classList.add("main_open");
    menu.classList.add("menu_open");
});

btnMenuClose.addEventListener("click", function() {
    main.classList.remove("main_open");
    menu.classList.remove("menu_open");
});
