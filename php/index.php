<?php

	include("connection.php");

	$conexion_db_pmi = new conexion();
	$mysqli = $conexion_db_pmi->abrir_conexion_pmidb();


	$sql = "Select * from user_pmi";
	$result = $mysqli->query($sql);

	if($result->num_rows > 0){
		while($row = $result->fetch_assoc()){
			echo $row["CORREO"];
		}
	}
?>