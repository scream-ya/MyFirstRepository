import React from 'react';
import PropTypes from 'prop-types';

function CategoryRow(props) {
    return (
        <tr key={props.index}>
          <td colSpan="5" className="category">{props.category}</td>
        </tr>
    );    
}

CategoryRow.propTypes = {
  index: PropTypes.string,
  category: PropTypes.string
}

export default CategoryRow