// src/components/BookCard.jsx
import React from 'react';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p>{book.author}</p>
      <p>{book.price}</p>
    </div>
  );
}

export default BookCard;
