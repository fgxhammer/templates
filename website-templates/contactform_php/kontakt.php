<!DOCTYPE=html>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Kontaktformular</title>
</head>
<body>
    <form method="post" action="script.php">
        <label for="">Name</label><br>
        <input type="text" name="name"><br>

        <label for="">Deine Email Adresse</label><br>
        <input type="text" name="email"><br>

        <label for="">Betreff</label><br>
        <input type="text" name="betreff"><br><br>

        <label for="">Nachricht</label><br>
        <textarea name="msg" id="" cols="60" rows="10"></textarea><br>

        <input type="submit" name="submit" value="senden">
    </form>


</body>
</html>