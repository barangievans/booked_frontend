// src/pages/CheckoutPage.jsx
import React, { useState, useEffect } from 'react';

const CheckoutPage = () => {
  const [cart, setCart] = useState([]); // Ensure cart is initialized as an empty array

  useEffect(() => {
    // You can replace this with actual logic to fetch the cart from localStorage, Redux, or API
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);  // Initialize cart from localStorage or empty array
  }, []);

  // If cart is empty or undefined, you can handle it gracefully before performing reduce
  const total = cart.reduce((acc, item) => acc + item.price, 0);  // Perform the reduce operation if cart is valid

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        <h2>Cart Items</h2>
        {cart.length === 0 ? (
          <p>No items in your cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>{item.name} - ${item.price}</li>
            ))}
          </ul>
        )}
        <div>
          <h3>Total: ${total}</h3>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
