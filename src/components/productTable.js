import React, {Component} from 'react';
import Table from './Table'; 
import SearchBar from './SearchBar';
import products from '../constants/products';

products.sort((a, b) => {return a.category > b.category ? 1 : -1});

class ProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: '', 
            inStockOnly: false
        };
    }

    handleChange = (e) => {
        const {id, value, checked, type} = e.target;

        this.setState({[id]: type == "checkbox" ? checked : value});
    }    

    render() {
        return (<div className="split">
                    <h1>Products</h1>
                    <SearchBar handleChange={this.handleChange}/>
                    <Table products={products} filters={this.state} />
                </div>);
    }  
}

export default ProductTable 