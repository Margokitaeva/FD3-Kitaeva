import React from 'react';

import './WordsBlock.css';

import Word from './Word'

class WordsBlock extends React.Component {
    
    state = {
        wordsNow: this.props.words,
    }

    render () {

        const wordsList=this.state.wordsNow.map(w => 
            <Word key={w.code} wordText={w.text} wordCode={w.code} />
        )

        return (
            <div className="Words">
                {this.props.isSorted ? wordsList.sort((a, b) => a.props.wordText.localeCompare(b.props.wordText)) : wordsList}
            </div>
        )
    }
}

export default WordsBlock;