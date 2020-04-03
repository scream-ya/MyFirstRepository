import React from 'react';
import Table from './Table';
import SearchBar from './SearchBar';
import NewProduct from './NewProduct';
import products from '../constants/products';

class ProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filterText: '',
      inStockOnly: false,
      isShowAddNewProd: false,
      productsList: products,
    };

    this.closeAddNewProd = this.closeAddNewProd.bind(this);
    this.showAddNewProd = this.showAddNewProd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewProd = this.addNewProd.bind(this);
    this.deleteProd = this.deleteProd.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  handleChange(e) {
    const {
      id, value, checked, type,
    } = e.target;

    this.setState({ [id]: type === 'checkbox' ? checked : value });
  }

  showAddNewProd() {
    this.setState({ isShowAddNewProd: true });
  }

  closeAddNewProd() {
    this.setState({ isShowAddNewProd: false });
  }

  addNewProd(parm) {
    const newProd = parm;
    const { productsList } = this.state;
    const { category, name } = newProd;
    const nextId = productsList.sort((a, b) => (a.id < b.id ? 1 : -1))[0].id + 1;

    newProd.id = nextId;

    if (category && name) {
      this.setState({ productsList: [...productsList, newProd] });
    }
  }

  deleteProd(prodId) {
    const { productsList } = this.state;
    const delProdId = productsList.findIndex((prod) => prod.id === prodId);

    productsList.splice(delProdId, 1);

    this.setState({ productsList: [...productsList] });
  }

  editProduct(editData) {
    const { productsList } = this.state;
    const prodId = productsList.findIndex((prod) => prod.id === editData.id);

    productsList.splice(prodId, 1);

    this.setState({ productsList: [...productsList, editData] });
  }

  render() {
    const {
      filterText, inStockOnly, isShowAddNewProd, productsList,
    } = this.state;

    return (
      <div>
        <h1>Products</h1>
        <SearchBar handleChange={this.handleChange} />
        <button type="button" onClick={this.showAddNewProd}>Add product</button>
        {isShowAddNewProd
        && <NewProduct addNewProd={this.addNewProd} closeAddNewProd={this.closeAddNewProd} />}
        <Table
          products={productsList}
          filterText={filterText}
          inStockOnly={inStockOnly}
          deleteProd={this.deleteProd}
          editProduct={this.editProduct}
        />
      </div>
    );
  }
}

export default ProductTable;
