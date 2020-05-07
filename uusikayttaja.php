<?php
// Haetaan tiedot lomakkeelta muuttujiin
$user = $_POST["kayttaja"];
$pass = $_POST["salasana"];


// Otetaan yhteys tietokantaan
$palvelin = "localhost";
$kayttaja = "id13358397_keuda";
$salasana = "Ohtuproto2020!";
$tietokanta = "id13358397_user";

$link = mysqli_connect($palvelin, $kayttaja, $salasana, $tietokanta);

if(mysqli_connect_error()){

	die("Tietokantaan ei saatu yhteyttä");

	}

$kysely = "INSERT INTO tunnukset (kayttaja, salasana) VALUES ('$user', MD5('$pass'))";
if (mysqli_query($link, $kysely)) {
      header('location: muistipeli.html');
} else {
      echo "Virhe: " . $kysely . "<br>" . mysqli_error($link);
}
mysqli_close($link);
