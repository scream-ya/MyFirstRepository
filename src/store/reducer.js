import {
  SET_FILTERS,
  VISIBLE_ADD_NEW_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  ADD_PRODUCT,
} from './actionTypes';

function reducer(state, action) {
  const currentState = state;
  const actionType = action.type;

  switch (actionType) {
    case SET_FILTERS: {
      const {
        id, type, checked, value,
      } = action.object;
      return { ...currentState, [id]: type === 'checkbox' ? checked : value };
    }

    case VISIBLE_ADD_NEW_PRODUCT: {
      const { value } = action;
      return { ...currentState, isShowAddNewProduct: value };
    }

    case EDIT_PRODUCT: {
      const { object } = action;
      const { productsList } = currentState;
      const index = productsList.findIndex((product) => product.id === object.id);

      productsList.splice(index, 1, object);

      return { ...currentState, productsList };
    }

    case REMOVE_PRODUCT: {
      const { id } = action;
      const { productsList } = currentState;

      return {
        ...currentState,
        productsList: [...productsList].filter((product) => product.id !== id),
      };
    }

    case ADD_PRODUCT: {
      const { object } = action;
      const { productsList } = currentState;

      return object.name
        ? { ...currentState, productsList: [...productsList, object] }
        : currentState;
    }

    default: {
      return currentState;
    }
  }
}

export default reducer;
