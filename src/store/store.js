/* eslint-disable import/prefer-default-export */
import { createStore } from 'redux';
import reducer from './reducer';
import products from '../constants/products';

const initialState = {
  filterText: '',
  inStockOnly: false,
  isVisibleAddNewProduct: false,
  productsList: products,
};

const store = createStore(reducer, initialState);

export default store;
