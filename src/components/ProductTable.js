import React from 'react';
import Table from './Table'; 
import SearchBar from './SearchBar';
import products from '../constants/products';
import ButtonAdd from './ButtonAdd';

class ProductTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filterText: "", 
            inStockOnly: false
        };
    }

    handleChange = (e) => {
        const {id, value, checked, type} = e.target;

        this.setState({[id]: type === "checkbox" ? checked : value});
    }    

    render() {
        return (<div>
                    <h1>Products</h1>
                    <SearchBar handleChange={this.handleChange}/>
                    <ButtonAdd />
                    <Table products={products} filters={this.state} />
                </div>);
    }  
}

export default ProductTable 