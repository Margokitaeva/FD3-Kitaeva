import React from 'react';

import './RainbowFrame.css';

class RainbowFrame extends React.Component {
    render() {
        let code = this.props.children;
        for (let i in this.props.colors) {
            code = <div key={i} className="BorderDiv" style={{borderColor: `${this.props.colors[i]}`}}>{code}</div>;
        }
        return (
            <div>{code}</div>
        );
    }
}

export default RainbowFrame;