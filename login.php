<?php 
session_start();
require_once('db.php');
// Yhdistetään tietokantaan
$conn = db_connect();

$tunnus = $_POST['tunnus'];
$password = $_POST['password'];





//haetaan käyttäjätiedot 
$sql = "select tunnus, password FROM user WHERE tunnus = '$tunnus' AND password = '$password'";
$results = $conn->query($sql) or die( $conn->error ); 
 
if (!$results) {
	echo "database is empty!"; 
	exit();
}

if ($results->num_rows == 1) {  //Login onnistui


	$_SESSION["tunnus"] = $tunnus; // Kun kirjautuminen onnistuu, sivu ohjautuu muistipeli sivulle
	header("Location: muistipeli.html");
} else echo "Login fails! <br>"; //jos epäonnistuu, niin tulee teksti login fails


$results->close(); 
?>
