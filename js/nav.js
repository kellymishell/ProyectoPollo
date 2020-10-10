var botonlis4 = document.getElementById("lisBoton4");
var boton4 = document.getElementById("boton4");

function desplegarBoton4() {
  botonlis4.classList.add("mostrar");
}

function ocultarBoton4() {
  botonlis4.classList.remove("mostrar");
}


/*PROGRAMACIÓN DEL MENU EN MODO MOBIL*/

var iconoMenuMobil = document.getElementById("iconoMenuResposive"),
  botonCerrar = document.getElementById("iconoMenuCerrar");

var nav = document.getElementById("nav"),
  botonesNav = document.getElementById("ulNav");

function desplegarMenuMobil() {
  nav.classList.add("activarNav");
  botonesNav.classList.add("activarBotones");
  botonCerrar.classList.remove("none");
}

function cerrar() {
  nav.classList.remove("activarNav");
  botonesNav.classList.remove("activarBotones");
  botonCerrar.classList.add("none");
}

iconoMenuMobil.addEventListener("click", desplegarMenuMobil, true);
botonCerrar.addEventListener("click", cerrar, true);
