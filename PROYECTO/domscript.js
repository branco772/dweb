function saludar(){
    alert("HOLA MUNDO");
}
function color(){
    var elDiv;
elDiv = document.getElementById('primero');
elDiv.style.color="blue";
}
var cajas= document.getElementsByClassName('caja');
function colores(){
    cajas[2].classList.toggle('naranja');
}
colores();

