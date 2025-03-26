<?php

$servername = "localhost";
$username = "root";
$pwd = "";
$database = "sco207db";
try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $pwd);
    // Set the PDO error mode to exception

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    echo "Connected successfully";
}
catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}