<?php
require_once '../config/db.php';

// Get JSON input sent from React frontend
$data = json_decode(file_get_contents("php://input"));
$action = $_GET['action'] ?? '';

// LOGIN ENDPOINT
if ($action === 'login' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($data->email ?? '');
    $password = trim($data->password ?? '');

    // Check if empty
    if(empty($email) || empty($password)) {
        echo json_encode(["success" => false, "message" => "Please fill all fields."]);
        exit;
    }

    // Prepare secure SQL to find user
    $stmt = $pdo->prepare("SELECT * FROM admins WHERE email = ? LIMIT 1");
    $stmt->execute([$email]);
    $admin = $stmt->fetch();

    // Verify Password using built-in bcrypt
    if ($admin && password_verify($password, $admin['password'])) {
        // Correct login! Save ID in server session
        $_SESSION['admin_id'] = $admin['id'];
        $_SESSION['role'] = $admin['role'];
        
        echo json_encode(["success" => true, "message" => "Login successful", "user" => $admin['username']]);
    } else {
        echo json_encode(["success" => false, "message" => "Invalid email or password."]);
    }
}

// LOGOUT ENDPOINT
elseif ($action === 'logout') {
    session_destroy(); // Destroy session
    echo json_encode(["success" => true, "message" => "Logged out securely."]);
}

// CHECK SESSION ENDPOINT (Frontend uses this to see if admin is logged in)
elseif ($action === 'check') {
    if(isset($_SESSION['admin_id'])) {
        echo json_encode(["authenticated" => true]);
    } else {
        echo json_encode(["authenticated" => false]);
    }
}
?>