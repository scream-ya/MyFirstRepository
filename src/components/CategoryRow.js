import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  category: PropTypes.string,
};

const defaultProps = {
  category: '',
};

function CategoryRow(props) {
  const { category } = props;

  return (
    <tr>
      <td colSpan="5" className="category">{category}</td>
    </tr>
  );
}

CategoryRow.propTypes = propTypes;
CategoryRow.defaultProps = defaultProps;

export default CategoryRow;
