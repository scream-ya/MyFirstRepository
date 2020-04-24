import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import { actionAddProduct, visibleAddNewProduct } from '../store/actions';

const propTypes = {
  addNewProduct: PropTypes.func.isRequired,
  hideAddNewProduct: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addNewProduct: (object) => dispatch(actionAddProduct(object)),
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

  const classes = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }))();

  return (
    <div>
      <div>
        <TextField id="category" label="Category" size="small" color="primary" value={productState.category} onChange={handleChange} />
      </div>
      <div>
        <TextField id="price" label="Price" type="number" size="small" color="primary" value={productState.price} onChange={handleChange} />
      </div>
      <div>
        <TextField id="name" label="Name" size="small" color="primary" value={productState.name} onChange={handleChange} />
      </div>
      <div>
        <Checkbox id="inStock" color="primary" checked={productState.inStock} onChange={handleChange} />
        <FormLabel>Stocked</FormLabel>
      </div>
      <div className={classes.root}>
        <Button variant="contained" size="small" onClick={handleAddProduct}>Add</Button>
        <Button variant="contained" size="small" onClick={hideAddNewProduct}>Close</Button>
      </div>
    </div>
  );
}

NewProduct.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(NewProduct);
