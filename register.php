<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rekisteröinti</title>
</head>
<body>

<form action="register_submit.php" method="post">
  <div class="container">
    <h1>Rekisteröidy</h1>
    <p>Täytä lomake rekisteröityäksesi</p>
    <hr>

    <label for="Nimi"><b>Nimi:</b></label>
    <input type="text" name="name" required>
    <p>
    <label for="email"><b>Sähköposti:</b></label>
    <input type="text"  name="email" required>
    <p>

    <label for="psw"><b>Salasana:</b></label>
    <input type="password"  name="psw" required>
     <p>   
    <label for="psw-repeat"><b>Toista salasana:</b></label>
    <input type="password"  name="psw-repeat" required>
    <hr>

 
    <button type="submit" class="registerbtn">Rekisteröidy</button>
  </div>

  <div class="container signin">
    <p>Tunnus olemassa? <a href="login.php">Kirjaudu</a>.</p>
  </div>
</form>



</body>
</html>