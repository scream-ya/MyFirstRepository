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
      isShowAddNewProduct: false,
      productsList: products,
    };

    this.hideAddNewProduct = this.hideAddNewProduct.bind(this);
    this.showAddNewProduct = this.showAddNewProduct.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewProduct = this.addNewProduct.bind(this);
    this.removeProductById = this.removeProductById.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  handleChange(e) {
    const {
      id, value, checked, type,
    } = e.target;

    this.setState({ [id]: type === 'checkbox' ? checked : value });
  }

  showAddNewProduct() {
    this.setState({ isShowAddNewProduct: true });
  }

  hideAddNewProduct() {
    this.setState({ isShowAddNewProduct: false });
  }

  addNewProduct(newProduct) {
    const { productsList } = this.state;
    const { name } = newProduct;

    if (name) {
      this.setState({ productsList: [...productsList, newProduct] });
    }
  }

  removeProductById(id) {
    const { productsList } = this.state;
    this.setState({ productsList: [...productsList].filter((product) => product.id !== id) });
  }

  editProduct(editProduct) {
    const { productsList } = this.state;
    const index = productsList.findIndex((product) => product.id === editProduct.id);

    productsList.splice(index, 1);

    this.setState({ productsList: [...productsList, editProduct] });
  }

  render() {
    const {
      filterText, inStockOnly, isShowAddNewProduct, productsList,
    } = this.state;

    return (
      <div>
        <h1>Products</h1>
        <SearchBar handleChange={this.handleChange} />
        <button type="button" onClick={this.showAddNewProduct}>Add product</button>
        {isShowAddNewProduct
          && <NewProduct addNewProduct={this.addNewProduct} hideAddNewProduct={this.hideAddNewProduct} />}
        <Table
          products={productsList}
          filterText={filterText}
          inStockOnly={inStockOnly}
          removeProductById={this.removeProductById}
          editProduct={this.editProduct}
        />
      </div>
    );
  }
}

export default ProductTable;
