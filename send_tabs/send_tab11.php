<?php

$name = $_POST['name'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);

$phone = $_POST['phone'];
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);

$email = $_POST['email'];
$email = htmlspecialchars($email);
$email = urldecode($email);
$email = trim($email);


if (mail("chudo.azbuka@gmail.com", "Чудо азбука - Покупка магнитных пазлов 'Джунгли' simple", "Имя: ".$name. "\nТелефон ".$phone. "\nE-mail: ".$email, "From: chudo.azbuka@gmail.com \r\n"))
	{	echo "Сообщение отправлено, все хорошо!";  
		header("Location: ./index.html");
	} else { 
		echo "при отправке сообщения возникли ошибки";
	}


?>