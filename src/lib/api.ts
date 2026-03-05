// Replace this with your actual domain where you upload the backend folder
export const API_BASE_URL = "https://vmautocare.com/backend/api"; 

// Example of submitting a lead from the frontend form
export const submitLead = async (formData) => {
  const response = await fetch(`${API_BASE_URL}/leads.php?action=create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  return response.json();
};

// Example of Admin Login
export const adminLogin = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth.php?action=login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // include credentials so the PHP session cookie is saved in the browser!
    credentials: 'true', 
    body: JSON.stringify({ email, password })
  });
  return response.json();
};