import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/BookDetailPage.css';

const BookDetailPage = () => {
  const { id } = useParams();
  
  return (
    <div className="book-detail-container">
      <h1>Book Details - {id}</h1>
      {/* Additional code to fetch and display book details */}
    </div>
  );
};

export default BookDetailPage;
