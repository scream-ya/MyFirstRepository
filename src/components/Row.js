import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

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
      price,
      stocked: inStock,
      name,
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

  const classes = makeStyles({
    red: {
      color: productState.inStock ? 'black' : 'red',
    },
  })();

  return (
    productState.isEditProduct
      ? (
        <>
          <TableRow>
            <TableCell><input id="name" type="text" value={productState.name} onChange={handleChange} /></TableCell>
            <TableCell><input id="price" type="text" value={productState.price} onChange={handleChange} /></TableCell>
            <TableCell><input id="inStock" type="checkbox" checked={productState.inStock} onChange={handleChange} /></TableCell>
            <TableCell><IconButton size="small" onClick={handleEditProduct}><DoneIcon fontSize="small" /></IconButton></TableCell>
            <TableCell><IconButton size="small" onClick={cancel}><CloseIcon fontSize="small" /></IconButton></TableCell>
          </TableRow>
        </>
      )
      : (
        <>
          <TableRow>
            <TableCell className={classes.red}>{productState.name}</TableCell>
            <TableCell>{productState.price}</TableCell>
            <TableCell align="center">{inStockToStr()}</TableCell>
            <TableCell align="center"><IconButton size="small" onClick={handleClick}><EditIcon fontSize="small" /></IconButton></TableCell>
            <TableCell align="center"><IconButton size="small" onClick={() => removeProductById(product.id)}><DeleteIcon fontSize="small" /></IconButton></TableCell>
          </TableRow>
        </>
      )
  );
}

Row.propTypes = propTypes;

export default Row;
