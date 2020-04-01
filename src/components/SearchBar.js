import React from 'react';
import PropTypes from 'prop-types';

function SearchBar(props) {
    return (
        <div>
            <input type="text" id="filterText" placeholder="Search..." className="inline" onChange={props.handleChange}/>
            <input type="checkbox" id="inStockOnly" onChange={props.handleChange} className="inline" /> Only show products in stock
        </div>
    );    
}

SearchBar.propTypes = {
    handleChange: PropTypes.func
}

export default SearchBar 