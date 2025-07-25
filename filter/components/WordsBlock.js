import React from 'react';

import './WordsBlock.css';

import Word from './Word'

class WordsBlock extends React.Component {

    render () {
        const wordsList=this.props.words.map(w => 
            <Word key={w.code} wordText={w.text} wordCode={w.code} />
        )

        return (
            <div className="Words">
                {wordsList}
            </div>
        )
    }
}

export default WordsBlock;