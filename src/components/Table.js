import React from 'react';
import PropTypes from 'prop-types';
import CategoryRow from './CategoryRow';
import Row from './Row';

const propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  products: PropTypes.arrayOf(PropTypes.object),
  deleteProd: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
};

const defaultProps = {
  filterText: '',
  inStockOnly: false,
  products: [],
};

function Table(props) {
  let prevCategory = '';
  const {
    filterText, inStockOnly, products, deleteProd, editProduct,
  } = props;

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Price</td>
          <td>Stocked</td>
          <td>Edit</td>
          <td>Delete</td>
        </tr>
      </thead>
      <tbody>
        {
          products.sort((a, b) => (a.category > b.category ? 1 : -1))
            .filter((product) => !filterText
              || product.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0)
            .filter((product) => !inStockOnly || product.stocked)
            .map((product) => {
              if (product.category !== prevCategory) {
                prevCategory = product.category;
                return (
                  <React.Fragment key={product.id}>
                    <CategoryRow category={product.category} />
                    <Row product={product} deleteProd={deleteProd} editProduct={editProduct} />
                  </React.Fragment>
                );
              }

              prevCategory = product.category;

              return <Row key={product.id} product={product} deleteProd={deleteProd} editProduct={editProduct} />;
            })
        }
      </tbody>
    </table>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default Table;
