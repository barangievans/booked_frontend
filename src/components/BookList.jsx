import React, { useState } from 'react';
import Pagination from '../Pagination';  // Correct path to Pagination.jsx
import '../../styles/BookList.css';  // Correct path to BookList.css

const BookList = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  const totalPages = Math.ceil(books.length / booksPerPage);

  // Slice the books array to get the current page's books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="book-list">
      {currentBooks.length > 0 ? (
        currentBooks.map(book => (
          <div key={book.id} className="book-card">
            <h2>{book.title}</h2>
            <p>Category: {book.category}</p>
            <p>Price: ${book.price}</p>
          </div>
        ))
      ) : (
        <p>No books available.</p>
      )}
      
      {/* Add the Pagination component here */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}  // Pass the onPageChange callback
      />
    </div>
  );
};

export default BookList;
