import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { actionEditProduct, actionRemoveProduct } from '../store/actions';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
    name: PropTypes.string,
  }).isRequired,
  removeProductById: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeProductById: (id) => dispatch(actionRemoveProduct(id)),
  editProduct: (object) => dispatch(actionEditProduct(object)),
});

function Row(props) {
  const { product, removeProductById, editProduct } = props;
  const initialProductState = {
    name: product.name,
    price: product.price,
    inStock: product.stocked,
    isEditProduct: false,
  };
  const [productState, setProductState] = useState(initialProductState);

  function inStockToStr() {
    return productState.inStock ? 'Yes' : 'No';
  }

  function handleChange(e) {
    const {
      id, value, checked, type,
    } = e.target;

    setProductState({ ...productState, [id]: type === 'checkbox' ? checked : value });
  }

  function handleClick() {
    setProductState({ ...productState, isEditProduct: true });
  }

  function handleEditProduct() {
    const {
      price, inStock, name,
    } = productState;

    editProduct({
      id: product.id,
      category: product.category,
      name,
      price,
      stocked: inStock,
    });

    setProductState({ ...productState, isEditProduct: false });
  }

  function cancel() {
    const { name, price, stocked } = product;

    setProductState({
      name,
      price,
      inStock: stocked,
      isEditProduct: false,
    });
  }

  return (
    productState.isEditProduct
      ? (
        <>
          <tr>
            <td><input id="name" type="text" value={productState.name} onChange={handleChange} /></td>
            <td><input id="price" type="text" value={productState.price} onChange={handleChange} /></td>
            <td><input id="inStock" type="checkbox" checked={productState.inStock} onChange={handleChange} /></td>
            <td><button type="button" onClick={handleEditProduct}>Ok</button></td>
            <td><button type="button" onClick={cancel}>Cancel</button></td>
          </tr>
        </>
      )
      : (
        <>
          <tr>
            <td className={clsx({ red: !productState.inStock })}>{productState.name}</td>
            <td>{productState.price}</td>
            <td align="center">{inStockToStr()}</td>
            <td><button id="isEditProduct" type="button" onClick={handleClick}>Edit</button></td>
            <td><button type="button" onClick={() => removeProductById(product.id)}>Del</button></td>
          </tr>
        </>
      )
  );
}

Row.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(Row);
