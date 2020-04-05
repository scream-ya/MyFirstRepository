import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
  removeProductById: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
};

function Row(props) {
  const { product, removeProductById, editProduct } = props;
  const initialState = {
    name: product.name,
    price: product.price,
    inStock: product.stocked,
    isEditProduct: false,
  };
  const [state, setState] = useState(initialState);

  function inStockToStr() {
    return state.inStock ? 'Yes' : 'No';
  }

  function handleChange(e) {
    const {
      id, value, checked, type,
    } = e.target;

    setState({ ...state, [id]: type === 'checkbox' ? checked : value });
  }

  function handleClick() {
    setState({ ...state, isEditProduct: true });
  }

  function handleEditProduct() {
    const {
      price, inStock, name,
    } = state;

    editProduct({
      id: product.id,
      category: product.category,
      name,
      price,
      stocked: inStock,
    });

    setState({ ...state, isEditProduct: false });
  }

  function cancel() {
    const { name, price, stocked } = product;

    setState({
      name,
      price,
      inStock: stocked,
      isEditProduct: false,
    });
  }

  return (
    state.isEditProduct
      ? (
        <>
          <tr>
            <td><input id="name" type="text" value={state.name} onChange={handleChange} /></td>
            <td><input id="price" type="text" value={state.price} onChange={handleChange} /></td>
            <td><input id="inStock" type="checkbox" checked={state.inStock} onChange={handleChange} /></td>
            <td><button type="button" onClick={handleEditProduct}>Ok</button></td>
            <td><button type="button" onClick={cancel}>Cancel</button></td>
          </tr>
        </>
      )
      : (
        <>
          <tr>
            <td className={clsx({ red: !state.inStock })}>{state.name}</td>
            <td>{state.price}</td>
            <td align="center">{inStockToStr()}</td>
            <td><button id="isEditProduct" type="button" onClick={handleClick}>Edit</button></td>
            <td><button type="button" onClick={() => removeProductById(product.id)}>Del</button></td>
          </tr>
        </>
      )
  );
}

Row.propTypes = propTypes;

export default Row;
