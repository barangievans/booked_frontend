import React from 'react';

const SearchBar = ({ searchQuery, handleSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for a book..."
      />
    </div>
  );
};

export default SearchBar;
