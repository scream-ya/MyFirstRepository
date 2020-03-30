import React from 'react';
import CategoryRow from './CategoryRow';
import Row from './Row';

function Table(props) {
    let prevCategory = "";
    const rows = [];
    const {filterText, inStockOnly} = props.filters;    

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
                {
                    props.products.map((product, idx) => {
                        if(filterText && product.name.toLowerCase().indexOf(filterText.toLowerCase()) != 0) {
                            return;
                        }

                        if(inStockOnly && !product.stocked) {
                            return;
                        }

                        if(product.category != prevCategory) {
                            prevCategory = product.category;
                            return <>
                                    <CategoryRow category={product.category} index={rows.length} />
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

export default Table 