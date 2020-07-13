import React from 'react';
import Hamburger from "../hamburger/hamburger"
import "./navbar.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <Hamburger click={props.handle} />
        </nav>
    )
}

export default Navbar;