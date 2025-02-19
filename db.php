<?php
$servername = "127.0.0.1";  // Use IP instead of "localhost"
$username = "root";         // Default MySQL username
$password = "";             // Default XAMPP password (empty)
$dbname = "campus_ease_system"; // ✅ Corrected database name
$port = 3307;               // MySQL port

// Enable error reporting
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname, $port);
    echo "Connected successfully!";
} catch (mysqli_sql_exception $e) {
    die("Database connection failed: " . $e->getMessage());
}
?>
