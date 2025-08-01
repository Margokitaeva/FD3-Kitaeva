import React from "react";

import './withRainbowFrame.css';

function withRainbowFrame(colors) {
    return function(Comp) {
        return function (props) {
            let code = <Comp {...props} />;
            for (let color of colors) {
                code = <div className="BorderDiv" style={{borderColor: `${color}`}}>{code}</div>
            }
            return code;
        }
    }
}

export {withRainbowFrame};