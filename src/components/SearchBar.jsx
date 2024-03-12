import React, { useState } from 'react';

const SearchBar = ({ data, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar juego..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
