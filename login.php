
<?php
// Haetaan tiedot lomakkeelta muuttujiin
$user = $_POST["kayttaja"];
$pass = $_POST["salasana"];


// Otetaan yhteys tietokantaan
$palvelin = "localhost";
$kayttaja = "id13358397_keuda";
$salasana = "Ohtuproto2020!";
$tietokanta = "id13358397_user";

$conn = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

if(mysqli_connect_error()){

	die("Tietokantaan ei saatu yhteyttä");

	}
//haetaan käyttäjätiedot
$sql = "select kayttaja, salasana FROM tunnukset WHERE kayttaja = '$user' AND salasana = MD5('$pass')";
$results = $conn->query($sql) or die( $conn->error );

if (!$results) {
	echo "database is empty!";
	exit();
}

if ($results->num_rows == 1) {  //Kirjautuminen onnistui


	$_SESSION["kayttaja"] = $user;
	?>

	<script>
	    window.location.href = "muistipeli.html";
	</script>

	<?php
} else echo "Login fails! <br>";


$results->close();
?>
