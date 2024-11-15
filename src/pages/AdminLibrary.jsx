import React, { useState } from 'react';

const AdminLibrary = () => {
  // Initial state for books
  const [books, setBooks] = useState([
    { id: 1, title: 'Book Title 1', author: 'Author Name', sold: false },
    { id: 2, title: 'Book Title 2', author: 'Author Name', sold: false },
    // Add more sample books here
  ]);

  // State for the form inputs (for adding or editing books)
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [editingBookId, setEditingBookId] = useState(null);

  // Handle book deletion
  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  // Handle marking a book as sold
  const handleMarkAsSold = (id) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, sold: true } : book
    ));
  };

  // Handle book updates (edit)
  const handleUpdate = (id) => {
    const updatedBooks = books.map(book =>
      book.id === id ? { ...book, ...newBook } : book
    );
    setBooks(updatedBooks);
    setEditingBookId(null);  // Reset the editing mode
    setNewBook({ title: '', author: '' }); // Clear the form fields
  };

  // Handle book addition
  const handleAddBook = () => {
    if (newBook.title && newBook.author) {
      const newId = books.length ? books[books.length - 1].id + 1 : 1;
      const newBookToAdd = { id: newId, ...newBook, sold: false };
      setBooks([...books, newBookToAdd]);
      setNewBook({ title: '', author: '' }); // Reset the form
    }
  };

  // Handle input change (for adding or editing books)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  return (
    <div>
      <h2>Admin Library Management</h2>
      <p>Manage the books in the library: add, remove, update, or mark books as sold.</p>

      {/* Form to add or edit a book */}
      <div className="form-container">
        <h3>{editingBookId ? 'Edit Book' : 'Add New Book'}</h3>
        <input
          type="text"
          name="title"
          value={newBook.title}
          onChange={handleChange}
          placeholder="Book Title"
        />
        <input
          type="text"
          name="author"
          value={newBook.author}
          onChange={handleChange}
          placeholder="Author Name"
        />
        <button onClick={editingBookId ? () => handleUpdate(editingBookId) : handleAddBook}>
          {editingBookId ? 'Update Book' : 'Add Book'}
        </button>
      </div>

      {/* Display list of books */}
      <div className="book-list">
        {books.map(book => (
          <div key={book.id} className="book-item">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Status: {book.sold ? 'Sold' : 'Available'}</p>
            <button onClick={() => handleMarkAsSold(book.id)} disabled={book.sold}>
              {book.sold ? 'Sold' : 'Mark as Sold'}
            </button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
            <button onClick={() => {
              setEditingBookId(book.id);
              setNewBook({ title: book.title, author: book.author });
            }}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminLibrary;
