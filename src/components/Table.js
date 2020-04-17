import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryRow from './CategoryRow';
import Row from './Row';

const propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const defaultProps = {
  filterText: '',
};

const mapStateToProps = (state) => ({
  filterText: state.filterText,
  inStockOnly: state.inStockOnly,
  products: state.productsList,
});

function Table(props) {
  let prevCategory = '';
  const {
    filterText, inStockOnly, products,
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
                    <Row product={product} />
                  </React.Fragment>
                );
              }

              prevCategory = product.category;

              return <Row key={product.id} product={product} />;
            })
        }
      </tbody>
    </table>
  );
}

Table.propTypes = propTypes;
Table.defaultProps = defaultProps;

export default connect(mapStateToProps)(Table);
