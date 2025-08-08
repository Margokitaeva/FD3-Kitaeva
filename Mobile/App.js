import React from 'react';
import ReactDOM from 'react-dom';

import Bank from './components/Bank';
import clientsData from './clients.json';


ReactDOM.render(
    <Bank clients={clientsData} />,
    document.getElementById('container') 
);
