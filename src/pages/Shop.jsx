import React, { useState, useEffect } from 'react'; 
import BookList from '../components/admin/BookList';  // Correct path to BookList
import Pagination from '../components/Pagination';  // Correct path to Pagination component
import '../styles/Shop.css';  // Correct path to Shop.css

// Example data for books with images
const mockBooks = [
  { id: 1, title: 'Book One', category: 'Fiction', price: 19.99, image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Book Two', category: 'Non-Fiction', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Book Three', category: 'Science', price: 15.99, image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Book Four', category: 'Fiction', price: 22.99, image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Book Five', category: 'Fiction', price: 18.99, image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Book Six', category: 'Non-Fiction', price: 25.99, image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'Book Seven', category: 'Science', price: 17.99, image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Book Eight', category: 'Fiction', price: 23.99, image: 'https://via.placeholder.com/150' },
];

const categories = ['All', 'Fiction', 'Non-Fiction', 'Science'];

const Shop = () => {
  const [products, setProducts] = useState(mockBooks);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    const filteredBooks = mockBooks.filter(book => {
      const matchesCategory = categoryFilter === 'All' || book.category === categoryFilter;
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    setProducts(filteredBooks);
  }, [categoryFilter, searchQuery]);

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="shop">
      <h1>Welcome to Our Shop</h1>
      <div className="shop-search">
        <input
          type="text"
          placeholder="Search for a book..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="shop-filters">
        <h3>Filter by Category:</h3>
        <select
          value={categoryFilter}
          onChange={(e) => handleCategoryChange(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="book-list">
        <BookList books={currentItems} />
      </div>

      <Pagination
        totalItems={products.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Shop;
