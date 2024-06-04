import React from "react";
import './navbar.css';
import logo from '../../assests/logo.jpeg';
// import {Link} from 'react-scroll';
// import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" />
            <div className="desktopMenu">
                <a className="desktopMenuListItem" href="/">Home</a>
                <a className="desktopMenuListItem" href="#experience">Experience</a>
                <a className="desktopMenuListItem" href="#projects">Projects</a>
                <a className="desktopMenuListItem" href="#skills">Skills</a>
            </div>
            <a href="#contact"><button className="desktopMenuBtn" >Contact Me</button></a>
        </nav>
    )
}
export default Navbar