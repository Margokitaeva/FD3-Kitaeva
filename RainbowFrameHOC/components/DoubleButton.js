import React from 'react';

import './DoubleButton.css';

class DoubleButton extends React.Component {
    
    cbPressed = (mode) => {
        console.log(`Button ${mode} pressed`);
        this.props.cbPressed(mode);
    }
    
    render() {
        return (
            <div style={{margin: "15px"}}>
                <input type="button" value = {this.props.caption1} onClick={() => this.cbPressed(1)}/>
                {this.props.children}
                <input type="button" value = {this.props.caption2} onClick={() => this.cbPressed(2)}/>
            </div>
        )
    }
}

export default DoubleButton;