<?php
	$handle=fopen("registrations.csv","a");
	require "PHPMailerAutoload.php";
	fputcsv($handle,$_POST);
	fclose($handle);
	//header("Location: Mini.html");
	require_once('class.phpmailer.php');
	$mail = new PHPMAILER(true);
	$mail->ISSMTP();
	$mail->Host='ssl://smtp.gmail.com';
	$mail->Port=465;
	$mail->SMTPSecure='ssl';
	$mail->SMTPAuth=true;
	$mail->Username='mnews.noreply.bot@gmail.com';
	$mail->Password='ragrac2223';
	$mail->From='karanamraghuvardhan12@gmail.com';
	$mail->FromName='MNEWS';
	$mail->IsHTML(true);
	$mail->AddAddress($_POST['mail']);
	//print($_POST['mail']);
	$mail->Subject="Verify your account for Mnews";
	$mail->Body="Hello"." ".$_POST['name']."<br></br><br></br>Thank You for registering with us"."<br></br><br></br>click the link to activate your account".
	'<br></br><br></br><a href="submit.html">GO TO MNEWS NOW' ;
	echo "<html><head><title>Thank You</title></head><body><h1>Thank You for registering with us</h1><h3>We have a sent an activation link t your mail address.Click the activation link to activate your account</body></html>";
	$mail->send();
?>
