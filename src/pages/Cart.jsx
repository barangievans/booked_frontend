import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';  // Correct path to the Cart.css file

function Carts() {
  return (
    <div className="carts-container">
      <h2>Select Your Cart</h2>
      <div>
        <Link to="/carts/lending" className="cart-link">Lending Cart</Link>
      </div>
      <div>
        <Link to="/carts/purchase" className="cart-link">Purchase Cart</Link>
      </div>
      <div>
        <Link to="/carts/borrowing" className="cart-link">Borrowing Cart</Link>
      </div>
    </div>
  );
}

export default Carts;

