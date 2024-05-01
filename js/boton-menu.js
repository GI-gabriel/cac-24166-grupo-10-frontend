
function iniciar() {
    var elemento = document.getElementById("menu-button");
    elemento.addEventListener("click", mostrarMenu);
}

function mostrarMenu() {
    var elemento = document.getElementById("main-nav-bar");
    if (elemento.style.display != "block")
        elemento.style.display = "block";
    else
        elemento.style.display = "none";
}

const mql = window.matchMedia("(max-width: 992px)");
mql.onchange = (e) => {
    var elemento = document.getElementById("main-nav-bar");

    if (e.matches)
        elemento.style.display = "none";
    else
        elemento.style.display = "block";
};

window.addEventListener("load", iniciar);