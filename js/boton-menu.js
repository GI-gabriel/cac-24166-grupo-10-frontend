
function iniciar() {
    var elemento = document.getElementById("menu-button");
    elemento.addEventListener("click", mostrarMenu);
}

function mostrarMenu() {
    var elemento = document.getElementById("main-nav-bar");
    elemento.style.height = elemento.style.height != "220px" ? "220px" : "0";
}

const mql = window.matchMedia("(max-width: 992px)");
mql.onchange = (e) => {
    var elemento = document.getElementById("main-nav-bar");
    elemento.style.height = e.matches ? "0" : "auto";
};

window.addEventListener("load", iniciar);