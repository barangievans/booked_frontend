// src/pages/ShopPage.jsx
import React, { useState, useEffect } from 'react';

const ShopPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // This should be replaced with an actual API call or static data
    const fetchedBooks = [
      { id: 1, title: 'Book 1', price: 20, action: 'purchase' },
      { id: 2, title: 'Book 2', price: 15, action: 'lend' },
      { id: 3, title: 'Book 3', price: 30, action: 'borrow' },
    ];
    setBooks(fetchedBooks);
  }, []);

  return (
    <div>
      <h1>Shop</h1>
      <div>
        <h2>Available Books</h2>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>Price: ${book.price}</p>
              <p>Action: {book.action}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShopPage;
