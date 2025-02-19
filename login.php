<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the email exists
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);
    if ($result->num_rows == 0) {
        echo "User not found.";
        exit();
    }

    // Fetch the user from the database
    $user = $result->fetch_assoc();

    // Verify password
    if (password_verify($password, $user['password'])) {
        echo "Login successful!";
        // Set session and redirect to dashboard
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['role'] = $user['role'];
        header("Location: dashboard.php");
    } else {
        echo "Invalid password.";
    }
}
?>
