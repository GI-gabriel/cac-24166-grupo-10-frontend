// Función para aplicar Sticky al navbar
const navbar = document.querySelector("#title-bar-container");

function stickynavbar() {
  let top = navbar.offsetTop;
  if (window.scrollY >= top) {    
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');    
  }
}
window.addEventListener('scroll', stickynavbar);
