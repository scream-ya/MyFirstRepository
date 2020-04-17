import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
      <input type="text" id="filterText" placeholder="Search..." className="inline" onChange={handleChange} />
      <input type="checkbox" id="inStockOnly" onChange={handleChange} className="inline" />
      Only show products in stock
    </div>
  );
}

SearchBar.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(SearchBar);
