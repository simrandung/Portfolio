import React from "react";
import "./skills.css";
import html from "../../assests/html.png";
import css from "../../assests/css.png";
import bootstrap from "../../assests/bootstrap.png";
import js from "../../assests/javascript.png";
import nodejs from "../../assests/nodejs.png";
import express from "../../assests/express.png";
import mongodb from "../../assests/mongodb.png";
import java from "../../assests/java.png";
import python from "../../assests/python.png";
import react from "../../assests/react.png";
import git from "../../assests/github.png";
import ps from "../../assests/problemsolving.jpeg";
import pupeteer from "../../assests/pupeteer.png";
import ui from "../../assests/uipath.png";


const Skills = () => {
    return (
        <div className="s" id="skills"><div className="s-left">
            <div className="s-skills"><h2>Skills</h2></div>
            <img src={html} className="html1" alt="html" /><h1 className="star">Html - ⭐⭐⭐⭐</h1><br />
            <img src={css} className="html1" alt="html" /><h1 className="star">CSS - ⭐⭐⭐</h1><br />
            <img src={bootstrap} className="html1" alt="html" /><h1 className="star">Bootstrap - ⭐⭐</h1><br />
            <img src={js} className="html1" alt="html" /><h1 className="star">JavaScript - ⭐⭐⭐⭐</h1><br />
            <img src={nodejs} className="html1" alt="html" /><h1 className="star">Node.JS - ⭐⭐⭐⭐⭐</h1><br />
            <img src={express} className="html1" alt="html" /><h1 className="star">Express - ⭐⭐</h1><br />
            <img src={mongodb} className="html1" alt="html" /><h1 className="star">MongoDB - ⭐⭐⭐⭐</h1><br />
        </div>
            <div className="s-right">
                <img src={java} className="html1" alt="html" /><h1 className="star">Java - ⭐⭐⭐⭐</h1><br />
                <img src={python} className="html1" alt="html" /><h1 className="star">Python - ⭐⭐⭐</h1><br />
                <img src={react} className="html1" alt="html" /><h1 className="star">React.JS - ⭐⭐⭐⭐</h1><br />
                <img src={git} className="html1" alt="html" /><h1 className="star">GitHub - ⭐⭐</h1><br />
                <img src={ps} className="html1" alt="ps" /><h1 className="star">Problem Solving - ⭐⭐⭐</h1><br />
                <img src={pupeteer} className="html1" alt="pupeteer" /><h1 className="star">Puppeteer - ⭐⭐⭐</h1><br />
                <img src={ui} className="html1" alt="uipath" /><h1 className="star">UiPath - ⭐⭐⭐⭐</h1><br />
            </div>

        </div>
    )
}

export default Skills;