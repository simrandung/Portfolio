import React from "react";
import "./contact.css";
// import linkedinLogo from '../../assests/linkedin.png';

const Contact = () => {
    return (

        <div className="c" id="contact">
            <h2 className="cinfo">Contact Me</h2>
            <p className="cp">+91 8208671580</p>
            <div className="contact-buttons">
                <a href="https://www.linkedin.com/in/simran-dung/" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-linkedin">LinkedIn</button>
                </a>
                <a href="https://github.com/simrandung?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-github">GitHub</button>
                </a>
                <a href="https://drive.google.com/file/d/1cEHnNiGK7FgYAegZlMfsqSkuGYEm2NoI/view?usp=sharing" download>
                    <button className="btn btn-cv">Download CV</button>
                </a>
            </div>
            <div className="copyright">
                <p className="copyright-p"> © 2024 Simran D. All Rights Reserved.</p>
            </div>
        </div>
        // </div>

    )
}

export default Contact;