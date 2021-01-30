<?php
	header('Access-Control-Allow-Origin: *');

	include('../db/index.php');
	include_once('./clases.php');

	switch ($_REQUEST['option']) {
		case 'save_bien':
			$action = new Actions($_REQUEST['Ciudad'], $_REQUEST['Telefono'], $_REQUEST['Direccion'],$_REQUEST['Codigo_Postal'], $_REQUEST['Tipo'], $_REQUEST['Precio'], $_REQUEST['Id']);
			$result = $action->save_Data();
			echo json_encode($result);				
		break;
		case 'list_bienes':
			$action = new Actions($_REQUEST['Ciudad'], $_REQUEST['Telefono'], $_REQUEST['Direccion'],$_REQUEST['Codigo_Postal'], $_REQUEST['Tipo'], $_REQUEST['Precio'],$_REQUEST['Id']);
			$result = $action->list_Data();
			echo json_encode($result);				
		break;
		case 'delete_bien':
			$action = new Actions($_REQUEST['Ciudad'], $_REQUEST['Telefono'], $_REQUEST['Direccion'],$_REQUEST['Codigo_Postal'], $_REQUEST['Tipo'], $_REQUEST['Precio']);
			$result = $action->list_Data();
			echo json_encode($result);				
		break;		
		
}

?>