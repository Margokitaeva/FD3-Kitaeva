import React from 'react';

import './Shop.css';

class Shop extends React.Component {

  render() {
    return (
      <div className="Shop">
          <p> Our shop is called {" "}
              <span className="ShopName">
                  {this.props.shopName}
              </span>
          </p>
          <p>Our address: {" "}
              <span className="ShopAddress">
                  {this.props.shopAddress}
              </span>
          </p>
      </div>
    )
  }
}

export default Shop;
