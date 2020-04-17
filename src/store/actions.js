/* eslint-disable import/prefer-default-export */
import {
  ACTION_TYPE_SET_FILTERS,
  ACTION_TYPE_VISIBLE_ADD_NEW_PRODUCT,
  ACTION_TYPE_REMOVE,
  ACTION_TYPE_EDIT,
  ACTION_TYPE_ADD,
} from './actionTypes';

export const setFilters = (event) => ({
  type: ACTION_TYPE_SET_FILTERS,
  event,
});

export const visibleAddNewProduct = (value) => ({
  type: ACTION_TYPE_VISIBLE_ADD_NEW_PRODUCT,
  value,
});

export const actionEdit = (editProduct) => ({
  type: ACTION_TYPE_EDIT,
  editProduct,
});

export const actionRemove = (id) => ({
  type: ACTION_TYPE_REMOVE,
  id,
});

export const actionAdd = (newProduct) => ({
  type: ACTION_TYPE_ADD,
  newProduct,
});
