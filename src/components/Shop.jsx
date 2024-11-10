import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList'; // Assuming this component handles the list of books
import { setBooks } from '../redux/slices/bookSlice'; // Action to set books

function Shop() {
  const [category, setCategory] = useState('all');
  const books = useSelector(state => state.books.items); // Get books from the Redux store
  const dispatch = useDispatch();

  // Simulate fetching books from an API or database
  useEffect(() => {
    const fetchedBooks = [
      { id: 1, title: 'Book 1', author: 'Author 1', price: 10, category: 'borrow' },
      { id: 2, title: 'Book 2', author: 'Author 2', price: 20, category: 'lend' },
      { id: 3, title: 'Book 3', author: 'Author 3', price: 30, category: 'purchase' },
      // Add more books here
    ];
    dispatch(setBooks(fetchedBooks)); // Dispatch the action to update Redux state
  }, [dispatch]);

  // Filter books based on selected category
  const filteredBooks = category === 'all' ? books : books.filter(book => book.category === category);

  return (
    <div>
      <h2>Shop</h2>
      <div>
        <button onClick={() => setCategory('all')}>All Books</button>
        <button onClick={() => setCategory('borrow')}>Borrowing</button>
        <button onClick={() => setCategory('lend')}>Lending</button>
        <button onClick={() => setCategory('purchase')}>Purchase</button>
      </div>
      <BookList books={filteredBooks} /> {/* Display the filtered books */}
    </div>
  );
}

export default Shop;
