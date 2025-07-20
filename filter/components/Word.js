import React from 'react';

import './Word.css';

class Word extends React.Component {
    render() {
        return (
            <div className="WordDiv">
                <span className="TextItem">{this.props.wordText}</span>
            </div>
        )
    }
}

export default Word;

