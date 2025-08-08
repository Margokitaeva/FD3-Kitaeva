import React, {useState} from 'react';

import './Filter.css';

import Controls from './Controls';
import List from './List';

const Filter = props => {
    const [wordsChosenNow, setWordsChosenNow] = useState(props.words)

    function wordsChanged(wordsChanged) {
        setWordsChosenNow(wordsChanged);
    }

    return (
        <div className="FilterContainer">
            <Controls words={props.words} cbWordsChanged={wordsChanged}/>
            <List words={wordsChosenNow} />
        </div>
    );
}

export default Filter;