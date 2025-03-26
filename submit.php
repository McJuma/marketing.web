<?php
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = htmlspecialchars($_POST["name"]);
    $e_mail = htmlspecialchars($_POST["email"]);
    $mess = htmlspecialchars($_POST["message"]);

    if (empty($name && $e_mail && $mess)){
        header("location: ../marketing_web.html");
        exit();

    }
    else{

        try{
            if (!file_exists("./contactForm.php")) {
                die("Required file 'contactForm.php' is missing.");
            }
            require_once "./contactForm.php";

            if (!isset($conn)) {
                die("Database connection is not initialized.");
            }

            $run = "INSERT INTO messages(u_name, e_mail, msg)
            VALUES(?,?,?);";

            $val = $conn->prepare($run);
            
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            $val->execute([$name, $e_mail, $mess]);

            $conn = null;
            $val = null;
            
            header ("location: ../marketing_web.html");

            die();
        }
        catch (PDOException $e){
            die("An error occurred: " . $e->getMessage());
        }
    }
}
else{
    header ("location: ../marketing_web.html");
}