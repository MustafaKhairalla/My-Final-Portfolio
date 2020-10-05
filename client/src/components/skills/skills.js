import React from 'react';
import "./skills.css";
import "../../../node_modules/@fortawesome/fontawesome-free/css/all.css"


function Skills() {
    return (
        <div className="upper">
            <h1 className="skill-text">Skills highlights</h1>
            <hr className=""></hr>

            <div className="skill">

                <div className="skill-item">
                    <i class="fab fa-4x fa-node"></i>
                    <h1>node</h1>
                </div>

                <div className="skill-item">
                    <i class="fab fa-4x fa-js"></i>
                    <h1>Javascript</h1>
                </div>

                <div className="skill-item">
                    <i class="fab fa-4x fa-html5"></i>
                    <h1>HTML5</h1>
                </div>

                <div className="skill-item">
                    <i class="fab fa-4x fa-css3-alt"></i>
                    <h1>CSS</h1>
                </div>

                <div className="skill-item">
                    <i class="fas fa-4x fa-database"></i>
                    <h1>MySQL</h1>
                </div>

                <div className="skill-item">
                    <i class="fab fa-4x fa-react"></i>
                    <h1>React js</h1>
                </div>

                <div className="skill-item">
                    <i class="fab fa-4x fa-git"></i>
                    <h1>Git</h1>
                </div>

                <div className="skill-item">
                    <i class="fab fa-4x fa-bootstrap"></i>
                    <h1>Bootstrap</h1>
                </div>

                <div className="skill-item">
                    <img className="j" src={require("../../data/img/jquery-01-01.svg")}></img>
                    <h1>jQuery</h1>
                </div>

                <div className="skill-item">
                    <img className="j" src={require("../../data/img/mongodb-01.svg")}></img>
                    <h1>Mongodb</h1>
                </div>

                <div className="skill-item">
                    <i class="fas fa-4x fa-cogs"></i>
                    <h1>REST API</h1>
                </div>

            </div>
        </div>
    )
};

export default Skills;