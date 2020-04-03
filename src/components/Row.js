import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    category: PropTypes.string,
    price: PropTypes.string,
    stocked: PropTypes.bool,
    name: PropTypes.string,
  }),
  deleteProd: PropTypes.func.isRequired,
  editProduct: PropTypes.func.isRequired,
};

const defaultProps = {
  product: {},
};

function Row(props) {
  const { product, deleteProd, editProduct } = props;
  const [editName, setName] = useState(product.name);
  const [editPrice, setPrice] = useState(product.price);
  const [editStocked, setStocked] = useState(product.stocked);
  const [isEditProd, setIsEditProd] = useState(false);

  function nameColor() {
    return editStocked
      ? editName
      : (
        <span style={{ color: 'red' }}>
          {editName}
        </span>
      );
  }

  function stockedToStr() {
    return editStocked ? 'Yes' : 'No';
  }

  function editProd() {
    const editData = {
      id: product.id,
      category: product.category,
      name: editName,
      price: editPrice,
      stocked: editStocked,
    };

    editProduct(editData);

    setIsEditProd(false);
  }

  function cancel() {
    const { name, price, stocked } = product;

    setName(name);
    setPrice(price);
    setStocked(stocked);
    setIsEditProd(false);
  }

  return (
    <>
      <tr>
        <td>
          {
            isEditProd
              ? <input type="text" value={editName} onChange={(e) => setName(e.target.value)} />
              : nameColor()
          }
        </td>
        <td>
          {
            isEditProd
              ? <input type="text" value={editPrice} onChange={(e) => setPrice(e.target.value)} />
              : editPrice
          }
        </td>
        <td align="center">
          {
            isEditProd
              ? <input type="checkbox" checked={editStocked} onChange={(e) => setStocked(e.target.checked)} />
              : stockedToStr()
          }
        </td>
        <td align="center">
          {
            isEditProd
              ? <button type="button" onClick={editProd}>Ok</button>
              : <button type="button" onClick={() => setIsEditProd(true)}>Edit</button>
          }
        </td>
        <td align="center">
          {
            isEditProd
              ? <button type="button" onClick={cancel}>Cancel</button>
              : <button type="button" onClick={() => deleteProd(product.id)}>Del</button>
          }
        </td>
      </tr>
    </>
  );
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
