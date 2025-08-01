import React from 'react';

import './Poem.css';
import DoubleButton from './DoubleButton';
import { withRainbowFrame } from './withRainbowFrame';

const colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
const DoubleButtonWithFrame = withRainbowFrame(colors)(DoubleButton);

class Poem extends React.Component {

    Pressed = (mode) => {
        alert(mode);
    }

    render() {
        return(
            <div>
                <DoubleButton caption1="однажды" caption2="пору" cbPressed={this.Pressed}> в студеную зимнюю </DoubleButton>
                <DoubleButtonWithFrame caption1="я из лесу" caption2="мороз" cbPressed={this.Pressed}> вышел, был сильный </DoubleButtonWithFrame>
            </div>
        )
    }
}

export default Poem;