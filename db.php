<?php

function db_connect()
{
   $result = new mysqli('localhost', 'root', '', 'ohtuproto'); 
   
   mysqli_set_charset($result, 'utf8');

   if (!$result)
     throw new Exception('Could not connect to database server');  //tämä tiedosto ottaa yhteyden tietokantaan
   else
     return $result;
}

?>
    