// src/pages/AdminDashboard.jsx
import React from 'react';
import '../styles/AdminDashboard.css';  // Correct path to the AdminDashboard CSS file

function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      {/* Top Navbar */}
      <div className="navbar">
        <h1>Admin Dashboard</h1>
        <div>
          <a href="/admin/dashboard">Dashboard</a>
          <a href="/admin/orders">Manage Orders</a>
          <a href="/admin/lending">Manage Lending Requests</a>
          <button className="logout-button">Logout</button>
        </div>
      </div>

      {/* Admin Dashboard Content */}
      <div className="admin-content">
        <h2>Manage your Library</h2>
        {/* Add your admin functionalities, like managing books, orders, etc. */}
      </div>
    </div>
  );
}

export default AdminDashboard;
