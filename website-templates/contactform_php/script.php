<?php
    //Config
    $mailTo = "";
    $mailFrom = "<noreply@outlook.com>";
    $mailSubject = "Neue Nachricht über deine Website";
    $returnPage = "gesendet.php";
    $returnErrorPage = "error.php";
    $mailText ="Über das Kontaktformular ist eine Nachricht eingegangen: \n \n =======================================\n \n";

    //Create Mail

    if(isset($_POST["submit"])) {
        foreach($_POST as $name => $value) {
            if(is_array($value)) {
                $mailText .= $name . ":\n";

                foreach($valueArray as $entry ) {
                    $mailText .= "  " . $value . "\n";
                }
            }else{
                $mailText .= $name . ": " .value . "\n"."\n";
            }

        }
    }
    if(isset($_POST["submit"])) {
    //Deliver Mail

    $mailSent = @mail($mailTo, $mailSubject, $mailText, "Von: ".$mailFrom);

    //Return Site

    if($mailSent == True) {
        header("Location:" .$returnPage);
    }else{
        header("Location:" .$returnErrorPage);
    }
}

exit();

?>
