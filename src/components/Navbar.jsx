// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';  // Importing the CSS file

function Navbar() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/carts">Carts</Link></li>
          <li><Link to="/shop">Shop</Link></li> {/* Add Shop link */}
        </ul>
      </nav>
    );
  }
  
  export default Navbar;
