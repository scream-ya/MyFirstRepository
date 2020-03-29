import React, {Component} from 'react';
import ProductTable from './table'; 
import FilterBlock from './filters';
import products from '../constants/products';

products.sort((a, b) => {return a.category > b.category ? 1 : -1});

class FilterableProductTable extends React.Component {
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
                    <FilterBlock handleChange={this.handleChange}/>
                    <ProductTable products={products} filters={this.state} />
                </div>);
    }  
}

export default FilterableProductTable 