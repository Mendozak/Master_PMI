<?php

	//incluimos la clase connection
	include("connection.php");

	


	function insert_user(){

		//Abrimos la conexion con la base de datos
		$conexion_db_pmi = new conexion();
		$con = $conexion_db_pmi -> abrir_conexion_pmidb(); //variable de conexion a la base de datos

		$sql = "INSERT INTO user_pmi(PRNOMBRE,SGNOMBRE,PRAPELLIDO,SGAPELLIDO,NMB_COMPLET,FECH_CR_USER,CORREO,USER_PMI,PASS_PMI) VALUES
		        ('KEVIN','SALVADOR','RAMOS','MENDOZA','KEVIN S RAMOS MENDOZA',CURRENT_TIMESTAMP,'KEVIN@KEVIN','ADD','123456')";

		if($con->query($sql) == True){
			return "agregado";
		}else{
			return "no";
		}

		return "no";
	}


	echo insert_user();

  ?>