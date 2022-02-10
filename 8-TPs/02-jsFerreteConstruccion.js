//´TP 2 De Acuña Lucas
/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let rectangulo;
	let largo;
	let ancho;
	let alambre;

	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	rectangulo = (largo + ancho)*2;
	alambre = rectangulo *3;
	mensaje = "la cantidad de almbre para el rectangulo es " + alambre;

	alert(mensaje);

}
function Circulo () 
{
	let circulo;
	let radio;

	radio = parseFloat(document.getElementById("txtIdRadio").value);

	circulo = (2 * 3.14 * radio)*3;
	alert("la cantidad de alambre para el circulo es " + circulo);
}
function Materiales () 
{
	let materiales;
	let ancho
	let resultado
	largo = parseFloat(document.getElementById("txtIdLargo").value)
	ancho = parseFloat(document.getElementById("txtIdAncho").value)
	superficie = largo + ancho;
	resultado = superficie *3

	alert(resultado)
}