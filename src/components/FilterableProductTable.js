import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Table from './ProductTable';
import SearchBar from './SearchBar';
import NewProduct from './NewProduct';
import { visibleAddNewProduct } from '../store/actions';

const propTypes = {
  isVisibleAddNewProduct: PropTypes.bool.isRequired,
  showAddNewProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isVisibleAddNewProduct: state.isVisibleAddNewProduct,
});

const mapDispatchToProps = (dispatch) => ({
  showAddNewProduct: () => dispatch(visibleAddNewProduct(true)),
});

function FilterableProductTable(props) {
  const { isVisibleAddNewProduct, showAddNewProduct } = props;

  return (
    <div>
      <h1>Products</h1>
      <SearchBar />
      <Button variant="contained" color="primary" size="small" onClick={showAddNewProduct}>Add product</Button>
      {isVisibleAddNewProduct
        && <NewProduct />}
      <Table />
    </div>
  );
}

FilterableProductTable.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(FilterableProductTable);
