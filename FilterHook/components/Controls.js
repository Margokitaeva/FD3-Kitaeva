import React, { useEffect, useState } from 'react';

import './Controls.css';

const Controls = props => {
    const [isSorted, setIsSorted] = useState(false);
    const [textSearch, setTextSearch] = useState("");
    const [wordsChosenNow, setWordsChosenNow] = useState([...props.words]);

    useEffect(() => {
        updateWords();
    }, [isSorted, textSearch, props.words]);

    const updateWords = () => {
        let result = [...props.words];

        if (textSearch)
            result = result.filter(word => word.text.toLowerCase().includes(textSearch.toLowerCase()));

        if (isSorted)
            result.sort((a, b) => a.text.localeCompare(b.text));

        props.cbWordsChanged(result);

    }

    function checkboxChanged(eo) {
        setIsSorted(eo.target.checked);
        // if (eo.target.checked) 
        //     setWordsChosenNow(prev => [...prev].sort((a, b) => a.text.localeCompare(b.text)));
        // else
        //     setWordsChosenNow(props.words.filter(word => word.text.includes(textSearch)));
        // props.cbWordsChanged(wordsChosenNow);
    }


    function textSearchFieldChanged(eo) {
        setTextSearch(eo.target.value);
        // setWordsChosenNow(props.words.filter(word => word.text.includes(eo.target.value)).sort(isSorted ? (a, b) => a.text.localeCompare(b.text) : undefined));
        // props.cbWordsChanged(wordsChosenNow);
    }



    function resetButtonPressed(eo) {
        setIsSorted(false);
        setTextSearch("");
        setWordsChosenNow(props.words);  
        // props.cbWordsChanged(wordsChosenNow);
    }


    return (
        <div className="Controls">
            <input type="checkbox" checked={isSorted} onChange={checkboxChanged} />
            <input type="text" name="serchText" className="TextSearchField" value={textSearch} onChange={textSearchFieldChanged} />
            <input type="button" value="сброс" onClick={resetButtonPressed} />
        </div>
        );
}

export default Controls;