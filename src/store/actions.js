/* eslint-disable import/prefer-default-export */
import {
  SET_FILTERS,
  VISIBLE_ADD_NEW_PRODUCT,
  EDIT_PRODUCT,
  REMOVE_PRODUCT,
  ADD_PRODUCT,
} from './actionTypes';

export const setFilters = (object) => ({
  type: SET_FILTERS,
  object,
});

export const visibleAddNewProduct = (value) => ({
  type: VISIBLE_ADD_NEW_PRODUCT,
  value,
});

export const actionEditProduct = (object) => ({
  type: EDIT_PRODUCT,
  object,
});

export const actionRemoveProduct = (id) => ({
  type: REMOVE_PRODUCT,
  id,
});

export const actionAddProduct = (object) => ({
  type: ADD_PRODUCT,
  object,
});
