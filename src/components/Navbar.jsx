import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Import the CSS for styling

function Navbar({ isAuthenticated, isAdmin }) {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/carts">Carts</Link></li>
        <li><Link to="/library">Library</Link></li> {/* Ensure this link is correct */}

        {/* Admin Dashboard Link */}
        {isAuthenticated && isAdmin && (
          <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
        )}

        {/* User Dashboard Link */}
        {isAuthenticated && !isAdmin && (
          <li><Link to="/user/dashboard">User Dashboard</Link></li>
        )}

        {/* Authentication Links */}
        {!isAuthenticated ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          <li><button>Logout</button></li>  // Handle logout logic
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
