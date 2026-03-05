<?php
require_once '../config/db.php';

$action = $_GET['action'] ?? '';

// 1. SUBMIT LEAD FROM WEBSITE FORM (Public Endpoint)
if ($action === 'create' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    
    // Basic validation
    if(empty($data->name) || empty($data->phone)) {
        echo json_encode(["success" => false, "message" => "Name and Phone are required."]);
        exit;
    }

    // Secure database insert
    $stmt = $pdo->prepare("INSERT INTO leads (name, email, phone, message, source) VALUES (?, ?, ?, ?, ?)");
    $result = $stmt->execute([
        htmlspecialchars($data->name), 
        htmlspecialchars($data->email ?? ''), 
        htmlspecialchars($data->phone), 
        htmlspecialchars($data->message ?? ''), 
        'Website Form'
    ]);

    if($result) {
        echo json_encode(["success" => true, "message" => "Thank you for contacting us. Your information is secure and will only be used to contact you."]);
    } else {
        echo json_encode(["success" => false, "message" => "Error submitting form."]);
    }
    exit;
}

// --- BELOW ENDPOINTS REQUIRE ADMIN LOGIN ---
if(!isset($_SESSION['admin_id'])) {
    http_response_code(401);
    echo json_encode(["error" => "Unauthorized access. Please login."]);
    exit;
}

// 2. GET ALL LEADS FOR DASHBOARD
if ($action === 'get_all' && $_SERVER['REQUEST_METHOD'] === 'GET') {
    // Fetch all leads descending by date
    $stmt = $pdo->query("SELECT * FROM leads ORDER BY created_at DESC");
    $leads = $stmt->fetchAll();
    echo json_encode(["success" => true, "data" => $leads]);
}

// 3. UPDATE LEAD STATUS
elseif ($action === 'update_status' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $pdo->prepare("UPDATE leads SET status = ? WHERE id = ?");
    $stmt->execute([$data->status, $data->id]);
    echo json_encode(["success" => true, "message" => "Lead updated"]);
}

// 4. DELETE LEAD
elseif ($action === 'delete' && $_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));
    $stmt = $pdo->prepare("DELETE FROM leads WHERE id = ?");
    $stmt->execute([$data->id]);
    echo json_encode(["success" => true, "message" => "Lead deleted"]);
}
?>