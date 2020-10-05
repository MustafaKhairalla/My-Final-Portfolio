import React, { useState } from 'react';
import "./projects.css";
import Wordpress from "../wordpress/wordpress";
import Custom from "../custom/custom";

export default function Projects() {
    const [clickState, setclickState] = useState("custom");

    function toggleView(props) {
        setclickState(props)
        console.log(props)
    }

    let display;

    if (clickState === "wordpress") {
        display = <Wordpress />
    } else {
        display = <Custom />
    }

    return (
        <div className="projects">
            <h1>Some of my work ...</h1>
            <hr></hr>
            <div className="selection">
                <button value="wordpress" className="BTN" onClick={e => toggleView(e.target.value)}>WordPress Sites</button>
                <button value="custom" className="BTN" onClick={e => toggleView(e.target.value)}>Custom Sites</button>
            </div>
            <div className="displayArea">
                {display}
            </div>
        </div>
    )
}