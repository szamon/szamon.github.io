<?php
$form_name = $_POST["user_name"];
$form_email = $_POST["user_email"];
$form_message = $_POST["user_message"];

$mailTo =  "szamon@wp.pl";
$subject = "Wiadomość od wizytatora" .$form_name;

$body_message = "Od: " .$form_name."\n";
$body_message .= "em@il:  " .$form_email."\n";
$body_message .= "Wiadomość:  " .$form_message;

$headers = "Od: ".$form_email."\r\n";
$headers .= "Odpisz do: ".$form_email."\r\n";

$mail_status = mail($mailTo, $subject, $body_message, $headers);

if ($mail_status) { ?>
    <script language="javascript" type="text/javascript">
        // Print a message
        alert('Thank you for the message. We will contact you shortly.');
        // Redirect to some page of the site. You can also specify full URL, e.g. http://template-help.com
        window.location = '../index.html';
    </script>
<?php
}else { ?>
    <script language="javascript" type="text/javascript">
        // Print a message
        alert('Message failed. Please, send an email to szamon@wp.pl');
        // Redirect to some page of the site. You can also specify full URL, e.g. http://template-help.com
        window.location = '../index.html';
    </script>
<?php
}?>
