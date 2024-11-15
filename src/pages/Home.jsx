import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks } from '../redux/slices/bookSlice';
import BookCard from '../components/BookCard';
import '../styles/Home.css';

function Home() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.items);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Update this URL based on where your backend is running
        const response = await fetch('http://localhost:5000/api/books');
        
        // If the response is not ok (status code not 200), throw an error
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Check if the content type is JSON
        const contentType = response.headers.get('Content-Type');
        if (!contentType || !contentType.includes('application/json')) {
          const text = await response.text();  // Get text to debug
          throw new Error('Received non-JSON response: ' + text);
        }

        // Parse the response as JSON
        const data = await response.json();
        dispatch(setBooks(data)); // Dispatch the data to Redux

      } catch (error) {
        console.error('Error fetching books:', error);
        // Optionally show an error message to the user here
      }
    };

    fetchBooks(); // Call the fetch function
  }, [dispatch]);

  return (
    <div>
      <h2>Books for Sale</h2>
      <div className="book-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Home;
