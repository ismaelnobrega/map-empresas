<?php
$mysql_hostname = "localhost";
$mysql_user = "ismae796_users";
$mysql_password = "passform";
$mysql_database = "ismae796_users";

$bd = mysql_connect($mysql_hostname, $mysql_user, $mysql_password) or die("Erro de conexao de banco de dados!");
mysql_select_db($mysql_database, $bd) or die("Erro ao acesso banco");
?>
