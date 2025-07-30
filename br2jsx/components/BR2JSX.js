import React from 'react';

import './BR2JSX.css';

class BR2JSX extends React.Component {
    
    render() {
        const texts = this.props.text.split(/<br *\/? *>/);
        const code = [];
        for (let i in texts) {
            code.push(texts[i]);
            code.push(<br key={`${i}`} />);
        }
        code.pop();

        return (
            <div className="MainDiv">
                {code}
            </div>
        );
    }
}

export default BR2JSX;
