import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { setFilters } from '../store/actions';

const propTypes = {
  handleChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    const {
      id, type, checked, value,
    } = event.target;

    dispatch(setFilters({
      id, type, checked, value,
    }));
  },
});

function SearchBar(props) {
  const { handleChange } = props;

  return (
    <div>
      <TextField id="filterText" placeholder="Search..." type="search" onChange={handleChange} color="primary" />
      <Checkbox id="inStockOnly" onChange={handleChange} color="primary" />
      Only show products in stock
    </div>
  );
}

SearchBar.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(SearchBar);
