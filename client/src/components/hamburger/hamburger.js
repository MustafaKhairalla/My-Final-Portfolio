import React from 'react';

import "./hamburger.css";

function Hamburger(props) {
    return (
        <button className="toggle-btn" onClick={props.click}>
            <div className="button-line"></div>
            <div className="button-line"></div>
            <div className="button-line"></div>
        </button>
    )
};

export default Hamburger;