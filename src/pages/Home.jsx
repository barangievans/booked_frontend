import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../redux/slices/bookSlice';
import BookCard from '../components/BookCard';
import '../styles/Home.css';

function Home() {
  const dispatch = useDispatch();
  const books = useSelector(state => state.books.items);

  useEffect(() => {
    // Fetch books from API (mock example)
    const fetchBooks = async () => {
      const response = await fetch('/api/books');
      const data = await response.json();
      dispatch(setBooks(data));
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <div>
      <h2>Books for Sale</h2>
      <div className="book-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
