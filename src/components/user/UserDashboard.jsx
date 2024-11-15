// src/pages/UserDashboard.jsx
import React from 'react';
import './UserDashboard.css';  // Ensure you're importing the correct CSS

function UserDashboard() {
  return (
    <div className="user-dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>User Dashboard</h2>
          <p>Welcome to your personal dashboard</p>
        </div>
        <ul className="sidebar-menu">
          <li><a href="/user/dashboard">Dashboard</a></li>
          <li><a href="/history">User History</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/carts">Carts</a></li>
          <li><button>Logout</button></li> {/* Logout Button */}
        </ul>
      </div>

      {/* Main Dashboard Content */}
      <div className="dashboard-content">
        <h1>Your Dashboard</h1>
        {/* Add your dashboard components or content here */}
        <p>Here you can manage your account, orders, and more!</p>
      </div>
    </div>
  );
}

export default UserDashboard;
