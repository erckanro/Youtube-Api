import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');


  const onInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchAntD = (value, _event) => {
    if (value.trim() !== '') {
      onSearch(value);
    }
  };

  return (

    <Search
      placeholder="Search Video"
      onSearch={handleSearchAntD}
      onChange={onInputChange}
      value={searchTerm}
      size={`large`}
    />
  );
}

export default SearchBar;
