<?php

$name = $_POST['name'];
$name = htmlspecialchars($name);
$name = urldecode($name);
$name = trim($name);

$phone = $_POST['phone'];
$phone = htmlspecialchars($phone);
$phone = urldecode($phone);
$phone = trim($phone);

if (mail("chudo.azbuka@gmail.com", "Чудо азбука - Помощь в выборе набора", "Имя: ".$name. "\nТелефон ".$phone, "From: chudo.azbuka@gmail.com \r\n"))
	{	echo "Сообщение отправлено, все хорошо!";  
		header("Location: ./index.html");
	} else { 
		echo "при отправке сообщения возникли ошибки";
	}


?>