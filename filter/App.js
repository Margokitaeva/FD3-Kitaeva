import React from 'react';
import ReactDOM from 'react-dom';

import FilterBlock from './components/FilterBlock';

const words = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];
const wordsWithCodes = words.map((word, index) => ({
    code: index + 1,
    text: word,
}))

ReactDOM.render(
    <FilterBlock words={wordsWithCodes} />,

    // <Shop shopName="Цветаева" 
    //       shopAddress="ул. Настоящая д.19" 
    //       products={productsArr} 
    // />, 
    document.getElementById('container') 
);
