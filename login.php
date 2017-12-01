<?php
session_start();
include("includes/config.php");

if($_SERVER['REQUEST_METHOD'] == "POST")
{
$myusername = addslashes($_POST['username']);
$mypassword = md5(addslashes($_POST['password']));

$sql = "SELECT userid FROM tbl_users WHERE username='$myusername' and password='$mypassword'";
$result = mysql_query($sql);
$count = mysql_num_rows($result);

if ($count == 1) {

$_SESSION['login_admin']=$myusername;
header("location: http://ismaelnobrega.com.br/webmapas/webapp.html");

  }
}
?>



<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="">

    <title>Mapa Interativo - Login</title>

    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="css/signin.css" rel="stylesheet">

   </head>

  <body>

    <div class="container">

      <form class="form-signin" method="post">
        <h2 class="form-signin-heading">Entre com seu login</h2>
        <label for="inputEmail" class="sr-only">E-mail</label>
        <input name="username" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Senha</label>
        <input name="password"type="password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Lembrar
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Efetuar login</button>
      </form>

    </div> <!-- /container -->


  </body>
</html>





