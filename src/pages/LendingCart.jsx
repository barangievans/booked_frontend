import React, { useState } from 'react';
import '../styles/LendingCart.css';

function LendingCart() {
  // Initial items in the lending cart (can be fetched from a server)
  const initialItems = [
    { id: 1, name: 'Book 1', quantity: 1 },
    { id: 2, name: 'Book 2', quantity: 2 },
    { id: 3, name: 'Book 3', quantity: 1 },
  ];

  // State to store cart items
  const [cartItems, setCartItems] = useState(initialItems);

  // Remove an item from the cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Handle lending cart submission (e.g., confirm the items being lent)
  const handleSubmit = () => {
    alert('Lending cart submitted successfully!');
    // You can process the cart items further here (e.g., send them to an API).
  };

  return (
    <div className="lending-cart">
      <h2>Lending Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your lending cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name} (x{item.quantity})</span>
              <button onClick={() => removeItem(item.id)} className="remove-item">Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="cart-actions">
        <button onClick={handleSubmit} className="submit-button">
          Confirm Lending
        </button>
      </div>
    </div>
  );
}

export default LendingCart;
