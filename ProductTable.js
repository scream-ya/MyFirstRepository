import React, {Component} from 'react';

function ProductCategoryRow(props) {
    return (
        <tr key={props.index}>
          <td colSpan="3" className="category">{props.category}</td>
        </tr>
    );    
}

function ProductRow(props) {
    const name = props.product.stocked ?
    props.product.name :
      <span style={{color: 'red'}}>
        {props.product.name}
      </span>;

    return (
          <tr key={props.index} >
            <td>{name}</td>
            <td>{props.product.price}</td>
            <td align="center">{props.product.stocked ? "Yes" : "No"}</td>
          </tr>
    );
}

function SearchBar(props) {
    return (
        <div>
            <input type="text" id="filterText" placeholder="Search..." onChange={props.handleChange}/>
            <input type="checkbox" id="inStockOnly" onChange={props.handleChange} /> Only show products in stock
        </div>
    );    
}

function ProductTable(props) {
    let prevCategory = "";
    const rows = [];
    const {filterText, inStockOnly} = props.filters;

    props.products.forEach((product) => {

        if(filterText && product.name.toLowerCase().indexOf(filterText.toLowerCase()) != 0) {
            return;
        }

        if(inStockOnly && !product.stocked) {
            return;
        }

        if(product.category != prevCategory) {
            rows.push(<ProductCategoryRow category={product.category} index={rows.length} />);
        }

        rows.push(<ProductRow product={product} index={rows.length}/>);

        prevCategory = product.category;
    });

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Stocked</td>
                </tr>
            </thead>
            <tbody>
                {rows}  
            </tbody>      
        </table>
    );
}

const products = [
    {category: "Sporting Goods", price: "$49.99",  stocked: true,  name: "Football"},
    {category: "Sporting Goods", price: "$9.99",   stocked: true,  name: "Baseball"},
    {category: "Sporting Goods", price: "$9.99",   stocked: true,  name: "Bebeball"},
    {category: "Fruit",          price: "$5.38",   stocked: false, name: "Apple"},
    {category: "Sporting Goods", price: "$29.99",  stocked: false, name: "Basketball"},
    {category: "Electronics",    price: "$99.99",  stocked: true,  name: "iPod Touch"},
    {category: "Electronics",    price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics",    price: "$199.99", stocked: true,  name: "Nexus 7"}
];

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
                    <SearchBar handleChange={this.handleChange}/>
                    <ProductTable products={products} filters={this.state} />
                </div>);
    }  
}

export default FilterableProductTable 