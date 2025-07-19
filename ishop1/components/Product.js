import React from 'react';

import './Product.css';

class Product extends React.Component {
    render() {
        return (
            <div className="ProductItem">
                <img className="ProductImage" src={this.props.pictureUrl} />
                <p className="ProductName">
                    {this.props.productName}
                </p>
                <p className="ProductStorage">
                    Осталось на складе: {" "}
                    {this.props.productStorage} {" "} шт.
                </p>
                <p className="ProductCode">
                    Код товара: {" "} {this.props.productCode}
                </p>
                <p className="ProductCost">
                    {this.props.productCost} {" "}руб.
                </p>
                
            </div>
        )
    }
}

export default Product;