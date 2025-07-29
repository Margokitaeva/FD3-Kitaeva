import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

import productsArr from './products.json';

ReactDOM.render(
  <Shop shopName="Цветаева" 
        shopAddress="ул. Настоящая д.19" 
        products={productsArr} 
  />, 
  document.getElementById('container') 
);
