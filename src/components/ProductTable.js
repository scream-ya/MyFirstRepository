import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
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

function ProductTable(props) {
  const { isVisibleAddNewProduct, showAddNewProduct } = props;

  return (
    <div>
      <h1>Products</h1>
      <SearchBar />
      <button type="button" onClick={showAddNewProduct}>Add product</button>
      {isVisibleAddNewProduct
        && <NewProduct />}
      <Table />
    </div>
  );
}

ProductTable.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
