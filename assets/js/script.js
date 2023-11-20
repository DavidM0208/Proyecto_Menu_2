document.querySelector(".barra_menu").addEventListener("click", animacion_menu);
let linea_1 = document.querySelector(".linea_1");
let linea_2 = document.querySelector(".linea_2");
let linea_3 = document.querySelector(".linea_3");
function animacion_menu() {
    linea_1.classList.toggle("linea_1Animacion");
    linea_2.classList.toggle("linea_2Animacion");
    linea_3.classList.toggle("linea_3Animacion");
}