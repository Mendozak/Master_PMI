<?php

	class conexion
	{
		
		 public $host;
		 public $user;
		 public $pass;
		 public $db;
		 
		
		 function __construct(){
		 	
		 	$this->host	= "localhost";
		 	$this->user = "root";
		 	$this->pass = "";
		 	$this->db = "pmi_schema";
		 }

		public function abrir_conexion_pmidb(){

			$mysqli = new mysqli('localhost','root','','pmi_schema');
			echo $this->host;
			echo $this->user;
			echo $this->pass;
			echo $this->db;

			if($mysqli->connect_error){
				echo 'conexion';
			}else{
				echo "error";
			}

		}

	}


?>