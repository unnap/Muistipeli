<?php
/*
 * T�t� funktiota muut t�ss� kansiossa olevat php-ohjelmat k�ytt�v�t ottamaan yhteyden tietokantaan.
 * Vaihda k�ytt�j�tunnus ja salasana vastaamaan omia tietojasi
 */
function db_connect()
{
   $result = new mysqli('localhost', 'id13358397_keuda', 'Ohtuproto2020!', 'id13358397_user'); 
   
   mysqli_set_charset($result, 'utf8');

   if (!$result)
     throw new Exception('Could not connect to database server');
   else
     return $result;
}

?>
