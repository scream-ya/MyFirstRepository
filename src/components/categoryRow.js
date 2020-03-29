import React from 'react';

function CategoryRow(props) {
    return (
        <tr key={props.index}>
          <td colSpan="3" className="category">{props.category}</td>
        </tr>
    );    
}

export default CategoryRow