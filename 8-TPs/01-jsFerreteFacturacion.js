// tp numero 1 de Acuña Lucas
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precio1;
	let precio2;
	let precio3;
	let sumar;
	let promedio;
	let precioFinal;

	precio1 = document.getElementById("txtIdPrecioUno").value;
	precio2 = document.getElementById("txtIdPrecioDos").value;
	precio3 = document.getElementById("txtIdPrecioTres").value;

	precio1 = parseInt(precio1);
	precio2 = parseInt(precio2);
	precio3 = parseInt(precio3);

	resultado = (precio1 + precio2) + precio3;

	mensaje = "El resultado es " + resultado;

	alert(mensaje)


}
function Promedio () 
{
	let numero1;
	let numero2;
	let numero3;
	let suma;
	let promedio;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	suma = numero1 + numero2 + numero3;
	promedio = suma / 3;
	mensaje = "El resultado es " + promedio;

	alert(mensaje);

}
function PrecioFinal () 
{
	let precio1;
	let precio2;
	let precio3;
	let precioFinal;
	let iva;
	let resultado; 

	precio1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	precio2 = parseInt(document.getElementById("txtIdPrecioDos").value);
	precio3 = parseInt(document.getElementById("txtIdPrecioTres").value);

	iva = (precio1 + precio2 + precio3)*21/100;
	precioFinal= iva;
	resultado = "el precio final es " + precioFinal;
	alert(resultado);


}

