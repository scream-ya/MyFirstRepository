import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const propTypes = {
  category: PropTypes.string,
};

const defaultProps = {
  category: '----',
};

function CategoryRow(props) {
  const { category } = props;

  return (
    <TableRow>
      <TableCell colSpan="5" align="center">
        <b>{category}</b>
      </TableCell>
    </TableRow>
  );
}

CategoryRow.propTypes = propTypes;
CategoryRow.defaultProps = defaultProps;

export default CategoryRow;
