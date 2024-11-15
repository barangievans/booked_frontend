import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Navbar.css';  // Correct path to Navbar.css

function Navbar({ isAuthenticated, isAdmin }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/carts">Carts</Link></li>
        
        {/* Show admin links if user is authenticated and is an admin */}
        {isAuthenticated && isAdmin && (
          <>
            <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
            <li><Link to="/admin/orders">Manage Orders</Link></li>
            <li><Link to="/admin/lending">Manage Lending Requests</Link></li>
          </>
        )}
        
        {/* Show user links if authenticated */}
        {isAuthenticated && !isAdmin && (
          <>
            <li><Link to="/history">User History</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
