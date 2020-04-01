import React from 'react';
import CategoryRow from './CategoryRow';
import Row from './Row';
import PropTypes from 'prop-types';

function Table(props) {
    let prevCategory = "";
    const {filterText, inStockOnly} = props.filters; 

    return (
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Stocked</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
                {                    
                    props.products.sort((a, b) => {return a.category > b.category ? 1 : -1})
                    .filter(product => {
                        return !filterText || product.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0
                    })
                    .filter(product => {
                        return !inStockOnly || product.stocked
                    })
                    .map((product, idx) => {
                        if(product.category !== prevCategory) {
                            prevCategory = product.category;
                            return <>
                                    <CategoryRow category={product.category} index={product.category} />
                                    <Row product={product} index={idx}/>
                                   </>
                        }

                        prevCategory = product.category;

                        return <Row product={product} index={idx}/>                        
                    })
                }
            </tbody>      
        </table>
    );
}

Table.propTypes = {
    filters: PropTypes.object,
    products: PropTypes.array
}

export default Table 