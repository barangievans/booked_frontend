import React from 'react';
import "../styles/Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  // Handle the previous page navigation
  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // Handle the next page navigation
  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  // Handle a specific page click
  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  // Create a range of page numbers to display
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={currentPage === 1}>
        Prev
      </button>
      
      {/* Page range display */}
      {totalPages > 1 && (
        <div className="page-numbers">
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`page-btn ${page === currentPage ? 'active' : ''}`}
              onClick={() => handlePageClick(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}

      <span>Page {currentPage} of {totalPages}</span>

      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
