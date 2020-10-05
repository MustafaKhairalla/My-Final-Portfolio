import React from 'react';
import "./custom.css";
import Foodecipe from "../../data/img/foodecipe.jpg";
import Tripoints from "../../data/img/tripoints.jpg";
import SelectTransit from "../../data/img/selecttransit.png";
import Password from "../../data/img/password.jpg";

export default function Custom() {
    return (
        <div className="custom">
            <h1>My Custom build Projects</h1>
            <div className="card">
                <div>
                    <img src={Foodecipe}></img>
                </div>
                <div className="showArea">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>Foodecipe</td>
                        </tr>

                        <tr>
                            <td>Description:</td>
                            <td>A web application that present food recipies based on selected catagory</td>
                        </tr>

                        <tr>
                            <td>built with:</td>
                            <td>
                                HTML5, CSS3, JavaScript <br />
                                UI Kit<br />
                                Tastey API<br />
                                <br />
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="show">
                    <button>Take a look</button>
                </div>
            </div>

            <div className="card">
                <div>
                    <img src={Tripoints}></img>
                </div>
                <div className="showArea">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>TriPoints</td>
                        </tr>

                        <tr>
                            <td>Description:</td>
                            <td>A web application that present ownership cost of any selected Mercedec Benz</td>
                        </tr>

                        <tr>
                            <td>built with:</td>
                            <td>
                                HTML5, CSS3, JavaScript <br />
                                UI Kit<br />
                                MySQl<br />
                                Fuel API
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="show">
                    <button>Take a look</button>
                </div>
            </div>

            <div className="card">
                <div>
                    <img src={SelectTransit}></img>
                </div>
                <div className="showArea">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>SelectTransit</td>
                        </tr>

                        <tr>
                            <td>Description:</td>
                            <td>A web application that allow users to search and book luxury limousien</td>
                        </tr>

                        <tr>
                            <td>built with:</td>
                            <td>
                                HTML5, CSS3, JavaScript and PHP <br />
                                Bootstap<br />
                                MySQL<br />
                                Custom API
                            </td>
                        </tr>
                    </table>
                </div>
                <div className="show">
                    <button>Take a look</button>
                </div>
            </div>

            <div className="card">
                <div>
                    <img src={Password}></img>
                </div>
                <div>
                    <h4 className="title"></h4>
                </div>
                <div className="discription">

                </div>
                <div className="show">
                    <button>Take a look</button>
                </div>
            </div>
        </div>
    )
}