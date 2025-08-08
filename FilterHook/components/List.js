import React, {useState} from 'react';

import './List.css';

const List = props => {

    const wordsList = props.words.map(w => 
    <div className="WordDiv" key={w.code}><span>{w.text}</span></div>)
    
    return (
        <div className="Words">
            {wordsList}
        </div>
    );
}

export default List;