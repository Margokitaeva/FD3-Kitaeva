import React from 'react';

import './ProductsBlock.css';

import Product from './Product';

class ProductsBlock extends React.Component {

    state = {
        selectedProductCode: null,
        allProducts: this.props.products,
    }

    productSelected = (code) => {
        console.log(`ProductsBlock: product with code ${code} was selected`);
        this.setState({selectedProductCode: code});
    }

    productDelete = (code) => {
        console.log(`ProductsBlock: product with code ${code} gonna be deleted`);
        this.setState(prevState => ({allProducts: prevState.allProducts.filter(p => p.code !== code), 
                                    selectedProductCode: prevState.selectedProductCode === code ? null : prevState.selectedProductCode}));
        for (let pr of this.state.allProducts)
            console.log(pr.code);
    }

    render() {
        const productsList=this.state.allProducts.map( p =>
            <Product key={p.code} pictureUrl={p.url} productName={p.name} 
            productStorage={p.storage} productCost={p.cost} productCode={p.code} 
            cbProductSelected={this.productSelected}
            isSelected={this.state.selectedProductCode === p.code}
            cbProductDelete={this.productDelete}
            />
        );
        
        return (
            <div className="Products">
                {productsList}
            </div>
        )
    }
}

export default ProductsBlock;