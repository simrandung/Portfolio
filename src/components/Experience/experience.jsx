import React from "react";
import "./experience.css";
import company from '../../assests/company.jpeg';

const Experience = () => {
    return (

        <div className="e" id="experience">
                <div className="e-left">
                    <a href="https://www.qualyval.com/"><img src={company} className="company1" alt="logo" /></a>
                    <div className="l-left">
                        <h1>Role : Software Developer</h1>
                        <h1>Organisation : Qualyval Consulting <br /><br />
                            Start Date : Dec, 2022<br />
                            End Date : Mar, 2023<br />
                            <br />
                            Experiences : Collaborated with cross-functional teams, contributed to documentation, and ensured application reliability.</h1>


                    </div>
                </div>
                <div className="e-right">
                    <a href="https://www.qualyval.com/"><img src={company} className="company2" alt="logo" /></a>
                    <div className="r-right">
                        <h1>Role : RPA Developer<br />
                            Organisation : Qualyval Consulting<br />
                            <br />
                            Start Date : Sept, 2021<br />
                            End Date : Dec, 2021<br />
                            <br />
                            Experiences : Developed and implemented RPA solutions using UiPath, automating manual processes and optimizing operational efficiency.</h1>
                    </div>
                </div>
        
        </div>

    )
}

export default Experience;