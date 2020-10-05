import React from 'react';
import "./wordpress.css";
import Wpthree60 from "../../data/img/wpthree60.png";
import Blacktransit from "../../data/img/blacktransit.png";
import Cossa from "../../data/img/coosa-river.png";

export default function Wordpress() {
    return (
        <div className="custom">
            <h1>My WordPress Projects</h1>
            <div className="card">
                <div>
                    <img src={Wpthree60}></img>
                </div>
                <div className="showArea">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>Wpthree60</td>
                        </tr>

                        <tr>
                            <td>Description:</td>
                            <td>A web application that present food recipies based on selected catagory</td>
                        </tr>

                        <tr>
                            <td>built with:</td>
                            <td>WordPress</td>
                        </tr>
                    </table>
                </div>
                <div className="show">
                    <button>Take a look</button>
                </div>
            </div>

            <div className="card">
                <div>
                    <img src={Blacktransit}></img>
                </div>
                <div className="showArea">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>Blacktransit</td>
                        </tr>

                        <tr>
                            <td>Description:</td>
                            <td>A web application that present ownership cost of any selected Mercedec Benz</td>
                        </tr>

                        <tr>
                            <td>built with:</td>
                            <td>WordPress</td>
                        </tr>
                    </table>
                </div>
                <div className="show">
                    <button>Take a look</button>
                </div>
            </div>

            <div className="card">
                <div>
                    <img src={Cossa}></img>
                </div>
                <div className="showArea">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>Coosa river</td>
                        </tr>

                        <tr>
                            <td>Description:</td>
                            <td>A web application that allow users to search and book luxury limousien</td>
                        </tr>

                        <tr>
                            <td>built with:</td>
                            <td>WordPress</td>
                        </tr>
                    </table>
                </div>
                <div className="show">
                    <button>Take a look</button>
                </div>
            </div>

        </div>
    )
}