import React from 'react';

import './ProductsBlock.css';

import Product from './Product';
import ProductChange from './ProductChange';

class ProductsBlock extends React.Component {

    state = {
        selectedProductCode: null,
        allProducts: this.props.products,
        productEdit: null,
    }

    productSelected = (code) => {
        console.log(`ProductsBlock: product with code ${code} was selected`);
        this.setState({selectedProductCode: code});
    }

    productDelete = (code) => {
        console.log(`ProductsBlock: product with code ${code} gonna be deleted`);
        this.setState(prevState => ({allProducts: prevState.allProducts.filter(p => p.code !== code), 
                                    selectedProductCode: prevState.selectedProductCode === code ? null : prevState.selectedProductCode}));
        // for (let pr of this.state.allProducts)
            // console.log(pr.code);
    }

    productEdit = (editCode) => {
        // let prod = this.state.allProducts.filter(p => p.code === editCode)[0];
        // console.log(prod);
        
        // const productChange = <ProductChange key={prod.code} pictureUrl={prod.url} productName={prod.name}
        // productStorage={prod.storage} productCost={prod.cost} productCode={prod.code}/>
        
        // this.setState({productEdit: productChange});
        this.setState({productEdit: editCode});
    }

    render() {
        const productsList=this.state.allProducts.map( p =>
            <Product key={p.code} pictureUrl={p.url} productName={p.name} 
            productStorage={p.storage} productCost={p.cost} productCode={p.code} 
            cbProductSelected={this.productSelected}
            isSelected={this.state.selectedProductCode === p.code}
            cbProductDelete={this.productDelete}
            workmode="1"
            cbProductEdit={this.productEdit}
            />
            // view - 1, edit - 2
        );

        let productChange = null;
        if (this.state.productEdit) {
            let prod = this.state.allProducts.filter(p => p.code === this.state.productEdit)[0];
            console.log(prod);

            productChange = <ProductChange key={prod.code} pictureUrl={prod.url} productName={prod.name}
            productStorage={prod.storage} productCost={prod.cost} productCode={prod.code}/>
        
        }
        
        return (
            <div>
                <div className="Products">
                    {productsList}
                </div>
                {this.state.productEdit && 
                    <div style={{marginTop: 30}}>
                        {productChange}
                    </div>
                }
            </div>
            
        )
    }
}

export default ProductsBlock;