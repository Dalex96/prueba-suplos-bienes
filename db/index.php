<?php
$host = "localhost";
$user = "root";
$pw = "";
$db = "Intelcost_bienes";

// Coneccion a la base de date_offset_get()

// $con = mysqli_connect($host,$user,$pw) or die ("Problemas al conectar");
// mysqli_select_db($con, $db) or die ("Problemas al conectar la DB");
$mysqli = new mysqli($host,$user,$pw, $db);
?>