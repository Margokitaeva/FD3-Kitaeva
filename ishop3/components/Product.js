import React from 'react';

import './Product.css';

class Product extends React.Component {

    state = {
        // selected: false,
        workmode: this.props.workmode,
    }

    productSelected = eo => {
        console.log(`Product with code ${this.props.productCode} was selected`);
        this.props.cbProductSelected(this.props.productCode);
    }

    productEdit = eo => {
        eo.stopPropagation();
        this.setState({workmode: 2});
        console.log(`${this.props.productCode}: pressed edit button`);
        this.props.cbProductEdit(this.props.productCode);
    }

    productDelete = eo => {
        eo.stopPropagation();
        if (confirm("Вы уверены, что хотите удалить этот товар?")) {
            console.log(`Deleting product with code ${this.props.productCode}`);
            this.props.cbProductDelete(this.props.productCode);
        }            
    }

    render() {
        if (this.props.workmode === "2") {}
        else if (this.props.workmode === "1") {
            return (
                <div className="ProductItem" style={{backgroundColor: this.props.isSelected ? "rgb(250, 250, 179)" : "white"}} onClick={this.productSelected}>
                    <img className="ProductImage" src={this.props.pictureUrl} />
                    <p className="ProductName">
                        {this.props.productName}
                    </p>
                    <p className="UsualText">
                        Осталось на складе: {" "}
                        {this.props.productStorage} {" "} шт.
                    </p>
                    {this.props.isSelected ? (
                        <React.Fragment>
                            <p className="UsualText">
                                Стоимость: {this.props.productCost} {" "}руб.                        
                            </p>
                            <p className="UsualText">
                                <a href={this.props.pictureUrl}> URL картинки </a>                     
                            </p>
                            <p className="ProductCode">
                                Код товара: {" "} {this.props.productCode}
                            </p>
                            <div className="EditDeleteButtonDiv" style={{paddingTop: 5}}>
                                <input type="button" name="btnEdit" className="EditButton" value="Edit" onClick={this.productEdit} />
                                <input type="button" name="btnDel" className="DeleteButton" value="Delete" onClick={this.productDelete} />
                            </div>
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            <p className="ProductCode">
                                Код товара: {" "} {this.props.productCode}
                            </p>
                            <p className="ProductCost">
                                {this.props.productCost} {" "}руб.
                            </p>
                            <div className="EditDeleteButtonDiv">
                                <input type="button" name="btnEdit" className="EditButton" value="Edit" onClick={this.productEdit} />
                                <input type="button" name="btnDel" className="DeleteButton" value="Delete" onClick={this.productDelete} />
                            </div>
                        </React.Fragment>
                    )}
                </div>
            );
        }
    }
}

export default Product;