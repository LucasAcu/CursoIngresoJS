/* Trabajo de Acuña Lucas*/
/* Trabajo numero 5*/
/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	let nombreIngrsado;
	let edadIngresada;
	let mensajeMostrar;


	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;


	mensajeMostrar = "usted se llama " + nombreIngresado + " y tiene " + edadIngresada + " edad";



	alert(mensajeMostrar);


}

