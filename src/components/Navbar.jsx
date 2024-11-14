<<<<<<< HEAD
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
=======
import React from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import '../styles/Navbar.css'; // Make sure this path is correct

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/checkout">Checkout</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <div className="welcome-message">Welcome to the Bookstore</div>
    </nav>
  );
};

export default Navbar;
>>>>>>> temp-branch
