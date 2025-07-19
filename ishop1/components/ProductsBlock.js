import React from 'react';

import './ProductsBlock.css';

import Product from './Product';

class ProductsBlock extends React.Component {
    render() {
        const productsList=this.props.products.map( p =>
            <Product key={p.code} pictureUrl={p.url} productName={p.name} productStorage={p.storage} productCost={p.cost} productCode={p.code} />
        );
        
        return (
            <div className="Products">
                {productsList}
            </div>
        )
    }
}

export default ProductsBlock;