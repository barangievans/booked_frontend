// src/pages/CartPage.jsx
import React, { useState, useEffect } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]); // Ensure cart is initialized as an empty array

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart data from localStorage (or use Redux, or any other state management)
    setCart(savedCart); // Set cart to savedCart or an empty array if no saved data exists
  }, []);

  if (!cart) {
    return <p>Loading...</p>;  // Show a loading message while cart is being fetched or set
  }

  return (
    <div>
      <h1>Cart Page</h1>
      <div>
        <h2>Your Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in your cart</p>  // If cart is empty
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li> // Example of rendering cart items
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CartPage;
