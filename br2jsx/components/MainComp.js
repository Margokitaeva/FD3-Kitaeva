import React from 'react';

import './MainComp.css';
import BR2JSX from './BR2JSX';

class MainComp extends React.Component {
    render() {
        let text = "первый<br>второй<br/>третий<br />последний"
        return (
            <BR2JSX text={text} />
        );
    }
}

export default MainComp;