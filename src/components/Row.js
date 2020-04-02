import React from 'react';
import PropTypes from 'prop-types';
import ButtonEdit from './ButtonEdit';
import ButtonDel from './ButtonDel';

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
            <td align="center">{<ButtonEdit />}</td>
            <td align="center">{<ButtonDel />}</td>
          </tr>
    );
}

Row.propTypes = {
  index: PropTypes.number,
  product: PropTypes.object
}

export default Row