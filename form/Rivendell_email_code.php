<?php
if(isset($_POST["submit"])){
//Checking for blank Fields..

if($_POST["formname"]==""||$_POST["formemail"]==""||$_POST["msg"]==""){
echo "All fields are required.";
}else{

// Check if the "Sender's Email" input field is filled out
$email=$_POST['formemail']; 
 
 // Sanitize e-mail address
 $email =filter_var($email, FILTER_SANITIZE_EMAIL);
 
 // Validate e-mail address
 $email= filter_var($email, FILTER_VALIDATE_EMAIL);

 if (!$email){
echo "Please enter a valid email address.";
 }
 else{
 $name = $_POST['formname'];

 $message = $_POST['msg'];

 $headers = 'From:'. $email2 . "\r\n"; // Sender's Email
 $headers .= 'Cc:'. $email2 . "\r\n"; // Carbon copy to Sender

 // message lines should not exceed 70 characters (PHP rule), so wrap it
 $message = wordwrap($message, 70);

 // Send mail by PHP Mail Function
 mail("info@rivendellrealestate.com", $name, $message, $headers);
 echo "Message sent successfully.";
 }
}
}
?>