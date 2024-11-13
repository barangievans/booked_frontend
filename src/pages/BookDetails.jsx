import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToPurchaseCart, addToLendingCart } from '../redux/slices/cartSlice';
import "../styles/BookDetails.css";

function BookDetails() {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const [book, setBook] = useState(null);

  // Fetch the book details from the API (or use mock data) based on the book ID
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`/api/books/${bookId}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };
    fetchBookDetails();
  }, [bookId]);

  const handleAddToPurchaseCart = () => {
    dispatch(addToPurchaseCart(book));
  };

  const handleAddToLendingCart = () => {
    dispatch(addToLendingCart(book));
  };

  if (!book) {
    return <p>Loading book details...</p>;
  }

  return (
    <div className="book-details">
      <img src={book.image} alt={book.title} />
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Price:</strong> ${book.price}</p>
      <button onClick={handleAddToPurchaseCart}>Add to Purchase Cart</button>
      <button onClick={handleAddToLendingCart}>Add to Lending Cart</button>
    </div>
  );
}

export default BookDetails;
