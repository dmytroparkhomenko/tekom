<?php 


    $name = $_POST['name'];
    $subject = 'Запит на розрахунок';
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $name = htmlspecialchars($name);
    $name = urldecode($name);
    
    $email = htmlspecialchars($email);
    $email = urldecode($email);

    $phone = htmlspecialchars($phone);
    $phone = urldecode($phone);

    $to = 'dim.parkhom2007@gmail.com';
    $from = trim($email);
    $message = 'Имя: ' . $name . "; \n" . 'Телефон: ' . $phone . "; \n" . "Email: $email";
    $headers = 'Content-Type: text/plain; charset=utf-8' . "\r\n";

    if (mail($to, $subject, $message, $headers) == 1) {
        echo $message;
        mail($to, $subject, $message, $headers);
        header('Location: ../index.html');
    } else {
        header('Location: https://www.google.com');
    }



    // if ($name != '' && $phone != '' && $email != '') {

    //     $message = 'Имя: ' . $name . "\n" . 'Телефон: ' . $phone . "; \n" . "Email: $email";

    //     $to = 'twentyone.adv@gmail.com';
    //     $from = trim($email);

    //     $headers = 'From: ' . $from . "\r\n" . "Reply-To: $from" . "\r\n";

    //     mail($to, $subject, $message, $headers);
        
    //     header('Location: ../index.html');
    // } else {
    //     header('Location: https://www.google.com');
    // }

    die();

?> 