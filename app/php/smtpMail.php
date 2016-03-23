<?php

// Функция для отпавки почты
    function sendEmail($name, $email, $sub, $body){
require_once 'libs/PHPMailer-master/PHPMailerAutoload.php';

$mail = new PHPMailer;

//$mail->SMTPDebug = 3;                               // Enable verbose debug output



$mail->setFrom($email, $name);
$mail->addAddress('cj27111992@gmail.com', 'Никула Михаил');     // Add a recipient



$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = $sub;
$mail->Body    = $body;
$mail->AltBody = $body;

if(!$mail->send()) {
    return 'Message could not be sent.';
} else {
    echo 'Message has been sent';
}

?>