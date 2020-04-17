import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from './Table';
import SearchBar from './SearchBar';
import NewProduct from './NewProduct';
import { visibleAddNewProduct } from '../store/actions';

const propTypes = {
  isShowAddNewProduct: PropTypes.bool.isRequired,
  showAddNewProduct: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isShowAddNewProduct: state.isShowAddNewProduct,
});

const mapDispatchToProps = (dispatch) => ({
  showAddNewProduct: () => dispatch(visibleAddNewProduct(true)),
});

function ProductTable(props) {
  const { isShowAddNewProduct, showAddNewProduct } = props;

  return (
    <div>
      <h1>Products</h1>
      <SearchBar />
      <button type="button" onClick={showAddNewProduct}>Add product</button>
      {isShowAddNewProduct
        && <NewProduct />}
      <Table />
    </div>
  );
}

ProductTable.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
