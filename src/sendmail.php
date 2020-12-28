<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('sweetdreams@info.ru', 'Авторские десерты');
	//Кому отправить
	$mail->addAddress('s.mysov@list.ru');
	//Тема письма
	$mail->Subject = 'Очередной заказ с сайта';
	$mail->Host = 'smtp.mail.ru'; 
	$mail->Password   = 'tqjljdrvotwcuops';
	$mail->Port = 465;

	//Рука
	$pay = "Оплата наличными";
	if($_POST['pay'] == "card"){
		$pay = "Оплата картой";
	}

	//Тело письма
	$body = '<h1>Заказ с сайта!</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['pay']))){
		$body.='<p><strong>Оплата:</strong> '.$pay.'</p>';
	}
	
	if(trim(!empty($_POST['comment']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['comment'].'</p>';
	}
	
	//Прикрепить файл

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка попробуйте позже';
	} else {
		$message = 'Данные отправлены';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>