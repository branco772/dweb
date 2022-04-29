/*document.write("USANDO LA MANERA CORRECTA DE ENLAZAR JAVASCRIPT" );*/
function suma(){
    var num1 = parseFloat(document.getElementById('numero1').value);
	var num2 = parseFloat(document.getElementById('numero2').value);
	
	let res = num1+num2;

	document.getElementById('resultado1').value = res;
    alert("operación realizada con exito. Aprete aceptar para ver el resultado");
}
function resta(){
    var num1 = parseFloat(document.getElementById('numero3').value);
	var num2 = parseFloat(document.getElementById('numero4').value);
	
	let res = num1-num2;

	document.getElementById('resultado2').value = res;
    alert("operación realizada con exito. Aprete aceptar para ver el resultado");
}
function multiplicacion(){
    var num1 = parseFloat(document.getElementById('numero5').value);
	var num2 = parseFloat(document.getElementById('numero6').value);
	
	let res = num1*num2;

	document.getElementById('resultado3').value = res;
    alert("operación realizada con exito. Aprete aceptar para ver el resultado");
}
function division(){
    var num1 = parseFloat(document.getElementById('numero7').value);
	var num2 = parseFloat(document.getElementById('numero8').value);
	
	let res = num1/num2;

	document.getElementById('resultado4').value = res;
    alert("operación realizada con exito. Aprete aceptar para ver el resultado");
}
