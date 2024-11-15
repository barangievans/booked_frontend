import React from 'react';
import CartItem from './CartItem';

const CartPage = ({ cartItems, onCheckout }) => {
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      )}
      <button onClick={onCheckout}>Checkout</button>
    </div>
  );
};

export default CartPage;
