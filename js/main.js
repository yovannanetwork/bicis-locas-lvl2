function validateForm(){
	/* Escribe tú código aquí */
}

// validacion del campo nombre y apellido para que la primera letra sea mayuscula.
function alerta(space, valor ){
	var span = document.createElement("span");
	span.appendChild(valor);
	var div = space.parentNode;
	var salida = div.appendChild(span);
	//return div;
 }

function validacion1() {
    var nombre = document.getElementById("name");
	var texto = document.createTextNode("Ingrese su nombre");
	
    
	if(nombre.value == ""){
		alerta(nombre, texto);
	}
	else{ 
		var nameArray = nombre.value.split("");
		var primeraLetra = nameArray[0];
		var mayuscula = primeraLetra.toUpperCase();
		var espacio = false;

		for ( var i = 1; i<nameArray.length; i++){
			if(espacio){
			mayuscula += nameArray[i].toUpperCase();
			espacio = false;
			}
			else
			mayuscula += nameArray[i];
			if(nameArray[i] == "")
			espacio = true;	
		}
	    document.getElementById("name").value = mayuscula;
		nombre.parentNode.removeChild(nombre.nextSibling);
	}
}

function validacion2(_evt){
	var letra = window.event.keyCode;
	if((letra>=65 && letra<=90) || letra==8 || letra==32){	
	}else{
		_evt.preventDefault();
	}
}

function validacionApellido(){
	
    var apellido = document.getElementById("lastname");
	var apell = document.createTextNode("Campo Apellido requerido");
    if(apellido.value == ""){
		alerta(apellido, apell);
	} 
	else{ 
    var nameArray= apellido.value.split("");
    var primeraLetra= nameArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio= false;
    
    for (var i=1; i<nameArray.length; i++){
        if(espacio){
            mayuscula += nameArray[i].toUpperCase();
            espacio =false;
        }else
		mayuscula += nameArray[i];
		if(nameArray[i] ==" ")
		espacio = true;
					
		}
		document.getElementById("lastname").value = mayuscula;
		apellido.parentNode.removeChild(apellido.nextSibling);
	}
}

function validacionLastname(_evt){
	var letra = window.event.keyCode;
	
	if((letra>=65 && letra<=90) || letra==8 || letra==32){	
	}else{
		_evt.preventDefault();
	}
}

// validacion de todos los campos requeridos
function validar(){
	
// section apellido
	

// section correo 
	var email = document.getElementById("input-email");
	var correo = document.createTextNode("verifica tu correo");
	var salida3 = document.createTextNode("correo invalido");
	var expresion = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
	if(email.value == ""){
		alerta(email, correo);
	}else if(!expresion.test(email.value)){
		alerta(email, salida3);
	}
	else{
		
		email.parentNode.removeChild(email.nextSibling);
	}
// section password
	var pass = document.getElementById("input-password");
	var passText = document.createTextNode("Contraseña invalida");
	var clave = document.createTextNode("Ingresa contraseña");
	var salida4 = document.createTextNode("Minimo 6 caracteres");
	if(pass.value === "123456"||pass.value === "098754"||pass.value === "password"){
		alerta(pass, passText);
	}
	else if(pass.value == ""){
		alerta(pass, clave);
	}
	else if(pass.value.length<6){
		alerta(pass, salida4);
	}else{
		
		pass.parentNode.removeChild(pass.nextSibling);
	}
// section selector
	var indice = document.getElementById("opciones");
	var salida5 = document.createTextNode("No seleccionaste ninguna opcion!");
	if(indice.value == "0"||indice.value == null){
		alerta(indice, salida5);
	}else{
		indice.parentNode.removeChild(indice.nextSibling);
	}
	
	
} 
