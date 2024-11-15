// src/pages/Carts.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Carts() {
  return (
    <div>
      <h2>Select Your Cart</h2>
      <div>
        <Link to="/carts/lending">Lending Cart</Link>
      </div>
      <div>
        <Link to="/carts/purchase">Purchase Cart</Link>
      </div>
      <div>
        <Link to="/carts/borrowing">Borrowing Cart</Link>
      </div>
    </div>
  );
}

export default Carts;
