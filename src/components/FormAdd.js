import React, { useState } from 'react';

function FormAdd(props) {
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [stocked, setStocked] = useState(false);
  const [name, setName] = useState('');

  const clickAdd = () => {
    if (category && name) {
      props.products.push({
        category,
        price: `$${price}`,
        stocked,
        name,
      });
    }
    props.addProd(false);
  };
  return (
    <>
      <label>
        Category:
        <input type="text" className="inline" onChange={(e) => setCategory(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" className="inline" onChange={(e) => setPrice(e.target.value)} />
      </label>
      <label>
        Stocked:
        <input type="checkbox" className="inline" onChange={(e) => setStocked(e.target.checked)} />
      </label>
      <label>
        Name:
        <input type="text" className="inline" onChange={(e) => setName(e.target.value)} />
      </label>
      <button type="button" onClick={clickAdd}>Add</button>
    </>
  );
}

export default FormAdd;
