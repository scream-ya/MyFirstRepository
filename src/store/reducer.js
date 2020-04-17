import {
  ACTION_TYPE_SET_FILTERS,
  ACTION_TYPE_VISIBLE_ADD_NEW_PRODUCT,
  ACTION_TYPE_REMOVE,
  ACTION_TYPE_EDIT,
  ACTION_TYPE_ADD,
} from './actionTypes';

function reducer(state, action) {
  const currentState = state;
  const actionType = action.type;

  switch (actionType) {
    case ACTION_TYPE_SET_FILTERS:
    {
      const {
        id, type, checked, value,
      } = action.event.target;
      return { ...currentState, [id]: type === 'checkbox' ? checked : value };
    }

    case ACTION_TYPE_VISIBLE_ADD_NEW_PRODUCT:
    {
      const { value } = action;
      return { ...currentState, isShowAddNewProduct: value };
    }

    case ACTION_TYPE_EDIT:
    {
      const { editProduct } = action;
      const { productsList } = currentState;
      const index = productsList.findIndex((product) => product.id === editProduct.id);

      productsList.splice(index, 1, editProduct);

      return { ...currentState, productsList };
    }

    case ACTION_TYPE_REMOVE:
    {
      const { id } = action;
      const { productsList } = currentState;

      return {
        ...currentState,
        productsList: [...productsList].filter((product) => product.id !== id),
      };
    }

    case ACTION_TYPE_ADD:
    {
      const { newProduct } = action;
      const { productsList } = currentState;

      return newProduct.name
        ? { ...currentState, productsList: [...productsList, newProduct] }
        : currentState;
    }

    default:
      return currentState;
  }
}

export default reducer;
