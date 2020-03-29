import React from 'react';

function Row(props) {
    const name = props.product.stocked ?
    props.product.name :
      <span style={{color: 'red'}}>
        {props.product.name}
      </span>;

    return (
          <tr key={props.index} >
            <td>{name}</td>
            <td>{props.product.price}</td>
            <td align="center">{props.product.stocked ? "Yes" : "No"}</td>
          </tr>
    );
}

export default Row