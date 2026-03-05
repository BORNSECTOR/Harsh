<?php
// Define CORS (Cross-Origin Resource Sharing) headers so your React app can communicate with this API
header('Access-Control-Allow-Origin: *'); // In production, replace * with your exact domain name
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=utf-8');

// Handle preflight requests (Browser security check before making actual request)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

// Start secure session for Admin Login authentication
session_start();

// Database credentials provided by you
$host = 'localhost'; // Usually localhost on shared hosting, but can be 103.108.220.222
$dbname = 'vmautoca1_Admin';
$username = 'vmautoca1_admin01';
$password = '0897harsh@thakur123';

try {
    // Create the PDO connection string
    $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8mb4";
    $options = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Throw errors if something fails
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,       // Fetch database rows as standard arrays
        PDO::ATTR_EMULATE_PREPARES   => false,                  // True prepared statements for security
    ];

    // Connect to database
    $pdo = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
    // If it fails, return a JSON error
    http_response_code(500);
    echo json_encode(["error" => "Database Connection Failed", "message" => $e->getMessage()]);
    exit();
}
?>