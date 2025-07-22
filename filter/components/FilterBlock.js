import React from 'react';

import './FilterBlock.css';

import WordsBlock from './WordsBlock';

class FilterBlock extends React.Component {

    state = {
        isSorted: false,
        textSearch: "",
        wordsChosenNow: [...this.props.words],
    }

    checkboxChanged = eo => {
        this.setState({isSorted: eo.target.checked});
        if (eo.target.checked)
            this.setState({wordsChosenNow: this.state.wordsChosenNow.sort((a, b) => a.text.localeCompare(b.text))})
        else {
            this.setState( (prevState) => { return {wordsChosenNow: this.props.words.filter(word => prevState.wordsChosenNow.some(prevWord => prevWord.code === word.code))}});
        }
    }

    textSearchFieldChanged = eo => {
        this.setState({textSearch: eo.target.value});
        this.setState({wordsChosenNow: this.state.wordsChosenNow.filter(word => word.text.includes(eo.target.value))});
    }

    resetButtonPressed = eo => {
        this.setState({
            isSorted: false, 
            textSearch: "", 
            wordsChosenNow: this.props.words,
        }); 
    }

    render () {
        return (
            <div>
                <div className="ChangablePart">
                    <input type="checkbox" checked={this.state.isSorted} onChange={this.checkboxChanged} />
                    <input type="text" name="serchText" className="TextSearchField" value={this.state.textSearch} onChange={this.textSearchFieldChanged} />
                    <input type="button" value="сброс" onClick={this.resetButtonPressed} />
                    <br />
                </div>
                <WordsBlock words={this.state.wordsChosenNow} isSorted={this.state.isSorted} />
            </div>
        )
    }
}

export default FilterBlock;