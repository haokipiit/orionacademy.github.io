<?php
//get data from form  

$firstname = $_POST['firstname'];
$lastname= $_POST['lastname'];
$phone= $_POST['phone'];
$email = $_POST['email'];
$city= $_POST['city'];
$district= $_POST['district'];
$pincode= $_POST['pincode'];
$to = "haokipiit7@gmail.com";
$subject = "Orion Website : New Registration";
$txt ="Name = ". $firstname + $lastname . "\r\n  Phone Number = " . $phone . "\r\n  Email = " . $email . "\r\n Address =" . $city + $district . "\r\n  Pincode = " . $pincode;
$headers = "From: noreply@theorionacademy.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
?>