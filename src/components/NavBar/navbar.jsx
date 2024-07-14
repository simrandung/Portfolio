import React, { useState } from "react";
import './navbar.css';
import logo from '../../assests/logo.jpeg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className={`desktopMenu ${isOpen ? "open" : ""}`}>
                <a className="desktopMenuListItem" href="/">Home</a>
                <a className="desktopMenuListItem" href="#experience">Experience</a>
                <a className="desktopMenuListItem" href="#projects">Projects</a>
                <a className="desktopMenuListItem" href="#skills">Skills</a>
                <a href="#contact"><button className="desktopMenuBtn">Contact Me</button></a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}

export default Navbar;
