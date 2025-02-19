<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: login.html"); // Redirect to login if not logged in
}
?>
<h1>Welcome to Your Dashboard</h1>
<p>Your role: <?php echo $_SESSION['role']; ?></p>
<a href="logout.php">Logout</a>
