import React, { useState } from 'react';
import Navbar from "../components/navbar/navbar";
import SideDrawer from "../components/hamburger/sideDrawer";
import Iam from "../components/iam/Iam";
import About from "../components/about/about";
import Skills from "../components/skills/skills";
import Projects from "../components/projects/projects";
import Contact from "../components/contact/contact";


function Main() {
    const [btnStat, setbtnStat] = useState(false);

    function toggleHandle() {
        setbtnStat(!btnStat)
    }


    let sideDrawer;

    if (btnStat) {
        sideDrawer = <SideDrawer />;
    }

    return (
        <div>
            <Navbar handle={toggleHandle} />
            {sideDrawer}
            <Iam />
            <About />
            <Skills />
            <Projects />
            <Contact />

        </div>


    )
};

export default Main;