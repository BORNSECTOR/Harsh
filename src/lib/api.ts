// This file handles communication with your PHP backend

const API_BASE_URL = '/backend/api';

export const submitLead = async (leadData: {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
  source?: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/leads.php`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // Sending data as JSON
      body: JSON.stringify(leadData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit lead');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting lead:', error);
    throw error;
  }
};

export const fetchLeads = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/leads.php`);
    if (!response.ok) throw new Error('Failed to fetch leads');
    return await response.json();
  } catch (error) {
    console.error('Error fetching leads:', error);
    return [];
  }
};