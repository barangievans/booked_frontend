import React from 'react';

const CheckoutPage = ({ cartItems, totalAmount, onPayment }) => {
  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p>{item.title} - ${item.price}</p>
          </div>
        ))}
      </div>
      <h3>Total: ${totalAmount}</h3>
      <button onClick={onPayment}>Proceed to Payment</button>
    </div>
  );
};

export default CheckoutPage;
