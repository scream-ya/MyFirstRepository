import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CategoryRow from './CategoryRow';
import Row from './Row';
import { actionEditProduct, actionRemoveProduct } from '../store/actions';


const propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeProductById: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
};

const defaultProps = {
  filterText: '',
};

const mapStateToProps = (state) => ({
  filterText: state.filterText,
  inStockOnly: state.inStockOnly,
  products: state.productsList,
});

const mapDispatchToProps = (dispatch) => ({
  removeProductById: (id) => dispatch(actionRemoveProduct(id)),
  editProduct: (object) => dispatch(actionEditProduct(object)),
});

function ProductTable(props) {
  let prevCategory = '';
  const {
    filterText, inStockOnly, products, removeProductById, editProduct,
  } = props;

  const classes = makeStyles({
    table: {
      maxWidth: 650,
    },
  })();

  return (
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell align="center">Name</TableCell>
          <TableCell align="center">Price</TableCell>
          <TableCell align="center">Stocked</TableCell>
          <TableCell align="center">Edit</TableCell>
          <TableCell align="center">Delete</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          products.sort((a, b) => {
            if (a.category > b.category) {
              return 1;
            }

            if (a.category < b.category) {
              return -1;
            }

            return 0;
          })
            .filter((product) => !filterText
              || product.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)
            .filter((product) => !inStockOnly || product.stocked)
            .map((product) => {
              if (product.category !== prevCategory) {
                prevCategory = product.category;
                return (
                  <React.Fragment key={product.id}>
                    <CategoryRow category={product.category} />
                    <Row product={product} removeProductById={removeProductById} editProduct={editProduct} />
                  </React.Fragment>
                );
              }

              prevCategory = product.category;

              return <Row key={product.id} product={product} removeProductById={removeProductById} editProduct={editProduct} />;
            })
        }
      </TableBody>
    </Table>
  );
}

ProductTable.propTypes = propTypes;
ProductTable.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
