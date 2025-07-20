import React from 'react';

import './Product.css';

class Product extends React.Component {

    // state = {
    //     selected: false,
    // }

    productSelected = eo => {
        console.log(`Product with code ${this.props.productCode} was selected`);
        this.props.cbProductSelected(this.props.productCode);
    }

    productDelete = eo => {
        eo.stopPropagation();
        if (confirm("Вы уверены, что хотите удалить этот товар?")) {
            console.log(`Deleting product with code ${this.props.productCode}`);
            this.props.cbProductDelete(this.props.productCode);
        }            
    }

    render() {
        return (
            <div className="ProductItem" style={{backgroundColor: this.props.isSelected ? "rgb(250, 250, 179)" : "white"}} onClick={this.productSelected}>
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
                <div className="DeleteButtonDiv">
                    <input type="button" name="btnDel" className="DeleteButton" value="Delete" onClick={this.productDelete}></input>
                </div>
                
            </div>
        )
    }
}

export default Product;