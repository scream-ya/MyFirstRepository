import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const propTypes = {
  addNewProduct: PropTypes.func.isRequired,
  hideAddNewProduct: PropTypes.func.isRequired,
};

function NewProduct(props) {
  const initialState = {
    category: '',
    price: '',
    inStock: false,
    name: '',
  };
  const [state, setState] = useState(initialState);
  const { addNewProduct, hideAddNewProduct } = props;

  function handleChange(e) {
    const {
      id, value, checked, type,
    } = e.target;

    setState({ ...state, [id]: type === 'checkbox' ? checked : value });
  }

  function addProduct() {
    const {
      category, price, inStock, name,
    } = state;

    addNewProduct({
      id: uuidv4(),
      category,
      price,
      stocked: inStock,
      name,
    });
  }

  function clear() {
    setState(initialState);
  }

  function handleAddProduct() {
    addProduct();
    clear();
  }

  return (
    <div>
      <div>
        <div>
          <span>Category:</span>
          <input id="category" type="text" className="inline" value={state.category} onChange={handleChange} />
        </div>
        <div>
          <span>Price:</span>
          <input id="price" type="number" className="inline" value={state.price} onChange={handleChange} />
        </div>
        <div>
          <span>Stocked:</span>
          <input id="inStock" type="checkbox" className="inline" checked={state.inStock} onChange={handleChange} />
        </div>
        <div>
          <span>Name:</span>
          <input id="name" type="text" className="inline" value={state.name} onChange={handleChange} />
        </div>
      </div>
      <button type="button" onClick={handleAddProduct}>Add</button>
      <button type="button" onClick={hideAddNewProduct}>Close</button>
    </div>
  );
}

NewProduct.propTypes = propTypes;

export default NewProduct;
