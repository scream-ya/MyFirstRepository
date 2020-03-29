import React from 'react';

function SearchBar(props) {
    return (
        <div>
            <input type="text" id="filterText" placeholder="Search..." onChange={props.handleChange}/>
            <input type="checkbox" id="inStockOnly" onChange={props.handleChange} /> Only show products in stock
        </div>
    );    
}

export default SearchBar 