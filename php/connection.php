<?php

	class conexion
	{
		
		 public $host;
		 public $user;
		 public $pass;
		 public $db;
		 
		
		 function __construct(){
		 	
		 	$this->host	= "127.0.0.1";
		 	$this->user = "root";
		 	$this->pass = "";
		 	$this->db   = "test_pmi";
		 }

		public function abrir_conexion_pmidb(){

			$mysqli = new mysqli('127.0.0.1','root','','test_pmi');

			if($mysqli){
				return $mysqli;
			}else{
				echo "error";
			}

		}

	}


?>