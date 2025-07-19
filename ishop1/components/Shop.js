import React from 'react';

import './Shop.css';

import ProductsBlock from "./ProductsBlock";


class Shop extends React.Component {
    render() {
        return (
            <div className="Shop">
                <p className="ShopName"> 
                    {this.props.shopName} <br/>
                    <span className="ShopAddress">
                        {this.props.shopAddress}
                    </span>
                </p>
                <p className="ShopAddress">
                    
                </p>

                <p className="BasicText"> Наши товары: </p>
                <div>
                  <ProductsBlock products={this.props.products}/>
                </div>
            </div>
        )
    }
}

export default Shop;
