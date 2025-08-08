import React from 'react';
import ReactDOM from 'react-dom';

import Filter from './components/Filter';

const words = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];
const wordsWithCodes = words.map((word, index) => ({
    code: index + 1,
    text: word,
}))

ReactDOM.render(
    <Filter words={wordsWithCodes} />,
    document.getElementById('container') 
);
