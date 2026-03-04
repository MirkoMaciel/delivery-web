const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menuMobile");

btnMenu.addEventListener("click", () => {

    const open = menu.classList.toggle("is-open");
    btnMenu.setAttribute("aria-expanded", open ? "true" : "false");
});

menu.querySelector("a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("is-open");
        btnMenu.setAttribute("aria-expanded", "false");
    });
});


document.addEventListener("click", (e) => {
    const clickDentro = menu.contains(e.target) || btnMenu.contains(e.target);
    if (!clickDentro) {
        menu.classList.remove("is-open");
        btnMenu.setAttribute("aria-expanded", "false");
    }
});