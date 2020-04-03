import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  addNewProd: PropTypes.func.isRequired,
  closeAddNewProd: PropTypes.func.isRequired,
};

function NewProd(props) {
  const [addCategory, setCategory] = useState('');
  const [addPrice, setPrice] = useState('');
  const [addStocked, setStocked] = useState(false);
  const [addName, setName] = useState('');

  const { addNewProd, closeAddNewProd } = props;

  function addProd() {
    const newProd = {
      category: addCategory,
      price: addPrice,
      stocked: addStocked,
      name: addName,
    };

    addNewProd(newProd);

    setCategory('');
    setPrice('');
    setStocked(false);
    setName('');
  }

  return (
    <div>
      <div>
        <div>
          <span>Category:</span>
          <input type="text" className="inline" value={addCategory} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <span>Price:</span>
          <input type="number" className="inline" value={addPrice} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div>
          <span>Stocked:</span>
          <input type="checkbox" className="inline" checked={addStocked} onChange={(e) => setStocked(e.target.checked)} />
        </div>
        <div>
          <span>Name:</span>
          <input type="text" className="inline" value={addName} onChange={(e) => setName(e.target.value)} />
        </div>
      </div>
      <button type="button" onClick={addProd}>Add</button>
      <button type="button" onClick={closeAddNewProd}>Close</button>
    </div>
  );
}

NewProd.propTypes = propTypes;

export default NewProd;
