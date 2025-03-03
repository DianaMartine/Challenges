import React from 'react';
import './SearchBox.css';
import searchIcon from '../../../assets/icons/search.svg';

const SearchBox = ({ placeholder, searchValue, handleSearch }) => (
  <div className="search-box">
    <input
      type="text"
      placeholder={placeholder}
      value={searchValue}
      onChange={handleSearch}
    />
    <img src={searchIcon} alt="search" width={24} height={24} />
  </div>
);

export default SearchBox;