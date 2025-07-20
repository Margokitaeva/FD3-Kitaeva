import React from 'react';

import './FilterBlock.css';

import WordsBlock from './WordsBlock';

class FilterBlock extends React.Component {

    state = {
        isSorted: false,
    }

    checkboxChanged = eo => {
        console.log("user clicked checkbox");
        console.log(`checkbox was checked? - ${eo.target.checked}`);
        eo.target.checked ? this.setState({isSorted: true}) : this.setState({isSorted: false});
    }

    textSearchFieldChanged = eo => {
        console.log(`user wrote ${eo.target.value}`);
    }

    resetButtonPressed = eo => {
        console.log("user pressed reset button");
    }

    render () {
        return (
            <div>
                <div className="ChangablePart">
                    <input type="checkbox" defaultChecked={false} onChange={this.checkboxChanged} />
                    <input type="text" name="serchText" className="TextSearchField" defaultValue="write some text" onChange={this.textSearchFieldChanged} />
                    <input type="button" value="сброс" onClick={this.resetButtonPressed} />
                    <br />
                </div>
                <WordsBlock words={this.props.words} isSorted={this.state.isSorted}/>
            </div>
            
        )
    }
}

export default FilterBlock;