$(document).ready(function() {
	
	//Evento para capturar los datos del usuario
	//Cuando se crea una cuenta por primera vez

	$("#create_user").click(function(){
		var prnombre   = $("#prnombre").val();
		var sgnombre   = $("#sgnombre").val();
		var prapellido = $("#prapellido").val();
		var sgapellido = $("#sgapellido").val();
		var email      = $("#email_user").val();
		var user_pmi   = $("#user_pmi").val();
		var pas_pmi    = $("#pas_pmi").val();
		var step       = "";
		
		var data = eval_parameter_user(prnombre,sgnombre,prapellido,sgapellido,email,user_pmi,pas_pmi,step);
		
		if(data[0] == false){
			console.log(data[0]);
		}else if(data[0] == true){
	    	console.log(data[0]);
	    }

	});

	//Funcion para evaluar si los campos estan vacios
	function eval_parameter_user(prnombre,sgnombre,prapellido,sgapellido,email,user_pmi,pas_pmi,step) {
		if (prnombre == "" || prnombre == " ") {
			//console.log('vacio');
			step = "PRIMER NOMBRE VACÍO";
			return [false,step];
		}
		if (prapellido == "" || prapellido == " ") {
			//console.log('vacio');
			step = "PRIMER APELLIDO VACIO";
			return [false,step];
		}
		if (sgapellido == "" || sgapellido == " ") {
			//console.log('vacio');
			step = "SEGUNDO APELLIDO VACIO";
			return [false,step];
		}
		if (email == "" || email == " ") {
			//console.log('vacio');
			step = "EMAIL VACIO";
			return [false,step];
		}
		if (user_pmi == "" || user_pmi == " ") {
			//console.log('vacio');
			step = "USUARIO VACIO";
			return [false,step];
		}
		if (pas_pmi == "" || pas_pmi == " ") {
			//console.log('vacio');
			step = "PASSWORD VACIO";
			return [false,step];
		}

		return[true," "];
	}

});