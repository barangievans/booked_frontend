import React from 'react';

const Library = () => {
  return (
    <div>
      <h2>Library</h2>
      <p>Explore our collection of books available for purchase or borrowing!</p>

      {/* Add your book listing logic here */}
      <div className="book-list">
        <div className="book-item">
          <h3>Book Title 1</h3>
          <p>Author: Author Name</p>
          <button>Borrow</button>
        </div>
        <div className="book-item">
          <h3>Book Title 2</h3>
          <p>Author: Author Name</p>
          <button>Borrow</button>
        </div>
        {/* Add more book items */}
      </div>
    </div>
  );
};

export default Library;
