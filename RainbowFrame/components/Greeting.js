import React from 'react';

import './Greeting.css';
import RainbowFrame from './RainbowFrame';


class Greeting extends React.Component {
    render() {
        let colors = ['red','orange', 'yellow','green', '#00BFFF', 'blue', 'purple'];
        return (
            <RainbowFrame colors={colors}>
                Hello!
            </RainbowFrame>
        );
    }
}

export default Greeting;
