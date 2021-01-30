<?php
class Actions
{
	private $Ciudad, $Direccion, $Telefono, $Codigo_Postal, $Tipo, $Precio, $Id;
	Public function __construct($Ciudad, $Direccion, $Telefono, $Codigo_Postal, $Tipo, $Precio, $Id)
	{
		$this->Ciudad = $Ciudad;
		$this->Direccion = $Direccion;
		$this->Telefono = $Telefono;
		$this->Codigo_Postal = $Codigo_Postal;
		$this->Tipo = $Tipo;
		$this->Precio = $Precio;
		$this->Id = $Id;
	}

	public function save_Data(){
		include('../db/index.php');
		$action = $mysqli->query("INSERT INTO bienes (Id, Ciudad, Direccion, Telefono, Codigo_Postal, Tipo, Precio)	VALUES ('$this->Id', '$this->Ciudad','$this->Direccion', '$this->Telefono', '$this->Codigo_Postal', '$this->Tipo', '$this->Precio')");
		return $action;
	}
	public function list_Data(){
		include('../db/index.php');
		$query = "SELECT * FROM bienes";
		$action = $mysqli->query($query);
		$row = $action->fetch_all(MYSQLI_ASSOC);
		return $row; 
	}
	public function delete_Data(){
		include('../db/index.php');
		$action = $mysqli->query("DELETE FROM bienes WHERE Id = '$this->Id'");
        if(!$action)
          return 0;
        else
          return 1;
	}	


}
//Resolver Problema de que no salen los valores de todos los campos
?>