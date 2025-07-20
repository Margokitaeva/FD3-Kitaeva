import React from 'react';

import './FilterBlock.css';

import WordsBlock from './WordsBlock';

class FilterBlock extends React.Component {

    state = {
        isSorted: false,
        textSearch: "",
        wordsChosenNow: this.props.words,
    }

    checkboxChanged = eo => {
        eo.target.checked ? this.setState({isSorted: true}) : this.setState({isSorted: false});
    }

    textSearchFieldChanged = eo => {
        this.setState({textSearch: eo.target.value});
        this.setState({wordsChosenNow: this.props.words.filter(word => word.text.includes(eo.target.value))});
    }

    resetButtonPressed = eo => {
        this.setState({isSorted: false, textSearch: "", wordsChosenNow: this.props.words});
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