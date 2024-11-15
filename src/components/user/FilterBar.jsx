import React from 'react';

const FilterBar = ({ selectedCategory, handleCategoryChange }) => {
  const categories = ['All', 'Fiction', 'Non-Fiction', 'Science'];

  return (
    <div>
      <select value={selectedCategory} onChange={(e) => handleCategoryChange(e.target.value)}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterBar;
