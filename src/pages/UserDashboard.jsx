import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserDashboard.css'; // Import styles for the sidebar layout

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <div className="sidebar">
        <h3>User Dashboard</h3>
        <ul>
          <li><Link to="/library">Library</Link></li>
          <li><Link to="/carts">My Cart</Link></li>
          <li><Link to="/history">Borrowing History</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
      <div className="dashboard-content">
        <h4>Welcome to Your Dashboard</h4>
        {/* Render user-specific content here */}
      </div>
    </div>
  );
};

export default UserDashboard;
