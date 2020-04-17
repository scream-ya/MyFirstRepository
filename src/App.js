import React from 'react';
import { Provider } from 'react-redux';
import ProductTable from './components/ProductTable';
import store from './store/store';

function App() {
  return <Provider store={store}><ProductTable /></Provider>;
}

export default App;
