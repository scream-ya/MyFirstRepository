import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { actionAdd, visibleAddNewProduct } from '../store/actions';

const propTypes = {
  addNewProduct: PropTypes.func.isRequired,
  hideAddNewProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addNewProduct: (newProduct) => dispatch(actionAdd(newProduct)),
  hideAddNewProduct: () => dispatch(visibleAddNewProduct(false)),
});

function NewProduct(props) {
  const initialProductState = {
    category: '',
    price: '',
    inStock: false,
    name: '',
  };
  const [productState, setProductState] = useState(initialProductState);
  const { addNewProduct, hideAddNewProduct } = props;

  function handleChange(e) {
    const {
      id, value, checked, type,
    } = e.target;

    setProductState({ ...productState, [id]: type === 'checkbox' ? checked : value });
  }

  function addProduct() {
    const {
      category, price, inStock, name,
    } = productState;

    addNewProduct({
      id: uuidv4(),
      category,
      price,
      stocked: inStock,
      name,
    });
  }

  function clear() {
    setProductState(initialProductState);
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
          <input id="category" type="text" className="inline" value={productState.category} onChange={handleChange} />
        </div>
        <div>
          <span>Price:</span>
          <input id="price" type="number" className="inline" value={productState.price} onChange={handleChange} />
        </div>
        <div>
          <span>Stocked:</span>
          <input id="inStock" type="checkbox" className="inline" checked={productState.inStock} onChange={handleChange} />
        </div>
        <div>
          <span>Name:</span>
          <input id="name" type="text" className="inline" value={productState.name} onChange={handleChange} />
        </div>
      </div>
      <button type="button" onClick={handleAddProduct}>Add</button>
      <button type="button" onClick={hideAddNewProduct}>Close</button>
    </div>
  );
}

NewProduct.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(NewProduct);
