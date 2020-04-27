
<?php 
session_start();
require_once('db.php');
// Kirjaudutaan tietokantaan
$conn = db_connect();

$user = $_POST["kayttaja"];
$pass = $_POST["salasana"];


//haetaan käyttäjätiedot 
$sql = "select kayttaja, salasana FROM tunnukset WHERE kayttaja = '$user' AND salasana = '$pass'";
$results = $conn->query($sql) or die( $conn->error ); 
 
if (!$results) {
	echo "database is empty!"; 
	exit();
}

if ($results->num_rows == 1) {  //Kirjautuminen onnistui


	$_SESSION["kayttaja"] = $user
	header("Location: muistipeli.html");
} else echo "Login fails! <br>";


$results->close();
?>
