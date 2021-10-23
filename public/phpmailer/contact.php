<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

date_default_timezone_set('America/Mexico_City');

require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$time           = time();
$nombre         = filter_input(INPUT_POST, 'name');
$telefono       = filter_input(INPUT_POST, 'phone');
$uMail          = filter_input(INPUT_POST, 'email');
$elmensaje      = filter_input(INPUT_POST, 'message');

$mensaje = "<div style='font-family:Arial'>";
$mensaje.= "<h2>Solicitud de Contacto</h2>";
$mensaje.= "<b>Nombre:</b> " . utf8_decode($nombre) . "<br>";
$mensaje.= "<br><hr><br>";
$mensaje.= "<b>Tel&eacute;fono:</b> " . $telefono . "<br>";
$mensaje.= "<b>Correo electr&oacute;nico:</b> " . $uMail . "<br>";
$mensaje.= "<b>Fecha:</b> " . date("Y-m-d ", $time) . "<br>";
$mensaje.= "<b>Hora:</b> " . date("H:i:s", $time) . "<br><br>";
$mensaje.= "<b>Mensaje:</b><br><hr><br>";
$mensaje.= "<pre>" . utf8_decode($elmensaje) . "</pre><br>";
$mensaje.= "</div>";

$mail = new PHPMailer(true);

try {
    //Server settings
    //$mail->SMTPDebug    = SMTP::DEBUG_SERVER;
    $mail->isSMTP();
    $mail->Host         = 'localhost';
    $mail->SMTPAuth     = false;
    $mail->SMTPAutoTLS  = false;
    $mail->Port         = 25;
    $mail->CharSet      = 'utf-8';
    //Recipients
    $mail->setFrom('contacto@romosalcedo.com', 'Mailer');
    $mail->addAddress('fernanda@romosalcedo.com', 'Fernanda Salcedo');
    $mail->ClearReplyTos();
    $mail->addReplyTo($uMail, utf8_decode($nombre));
    //Content
    $mail->isHTML(true);       
    $mail->Subject = utf8_decode("Contacto desde sitio web");
    $mail->Body    =  $mensaje;

    $mail->send();
    echo 'Mensaje enviado!';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
