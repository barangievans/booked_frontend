import React, { useState } from 'react';
import Pagination from '../components/Pagination'; // Correct import
import "../styles/BookList.css";

function BooksList({ books }) {
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 10;
  const totalPages = Math.ceil(books.length / booksPerPage);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div>
      <div className="books-list">
        {currentBooks.length > 0 ? (
          currentBooks.map(book => (
            <div key={book.id}>{book.title}</div>
          ))
        ) : (
          <p>No books available.</p>
        )}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default BooksList;
