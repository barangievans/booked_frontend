import React from 'react';
import { useDispatch } from 'react-redux';
import { addToPurchaseCart } from '../redux/slices/cartSlice';
import '../styles/BookCard.css';

function BookCard({ book }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToPurchaseCart(book));
  };

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

export default BookCard;