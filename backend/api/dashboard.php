<?php
require_once '../config/db.php';

// Security Check: Must be logged in
if(!isset($_SESSION['admin_id'])) {
    http_response_code(401);
    echo json_encode(["error" => "Unauthorized"]);
    exit;
}

// Object to hold all our stats
$stats = [];

// 1. Total Leads
$stmt = $pdo->query("SELECT COUNT(*) as total FROM leads");
$stats['totalLeads'] = $stmt->fetch()['total'];

// 2. Today's Leads
$stmt = $pdo->query("SELECT COUNT(*) as total FROM leads WHERE DATE(created_at) = CURDATE()");
$stats['todayLeads'] = $stmt->fetch()['total'];

// 3. Active Services
$stmt = $pdo->query("SELECT COUNT(*) as total FROM services WHERE status = 'active'");
$stats['activeServices'] = $stmt->fetch()['total'];

// 4. Monthly Revenue (Sum of revenue this month)
$stmt = $pdo->query("SELECT SUM(amount) as total FROM revenue_logs WHERE MONTH(log_date) = MONTH(CURDATE()) AND YEAR(log_date) = YEAR(CURDATE())");
$revenue = $stmt->fetch()['total'];
$stats['monthlyRevenue'] = $revenue ? $revenue : 0;

// 5. Chart Data: Leads Over Time (Last 7 days)
$stmt = $pdo->query("SELECT DATE(created_at) as date, COUNT(*) as count FROM leads WHERE created_at >= DATE(NOW()) - INTERVAL 7 DAY GROUP BY DATE(created_at)");
$stats['leadsChart'] = $stmt->fetchAll();

// Return everything as JSON to React Dashboard
echo json_encode(["success" => true, "data" => $stats]);
?>