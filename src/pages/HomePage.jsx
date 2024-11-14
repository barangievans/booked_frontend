import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/slices/bookSlice';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.items);
  const status = useSelector((state) => state.books.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [dispatch, status]);

  return (
    <div className="home-container">
      <h2>Welcome to the Bookstore</h2>
      {status === 'loading' ? (
        <p>Loading books...</p>
      ) : (
        <div className="book-list">
          {books.map((book) => (
            <div key={book.id} className="book-item">
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/book/${book.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
