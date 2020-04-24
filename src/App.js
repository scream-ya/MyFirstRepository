import React from 'react';
import { Provider } from 'react-redux';
import FilterableProductTable from './components/FilterableProductTable';
import store from './store/store';

function App() {
  return <Provider store={store}><FilterableProductTable /></Provider>;
}

export default App;
