import React from 'react'
import './Navbar.css'
import { Link, animateScroll as scroll } from "react-scroll";

const scrollToSection = (sectionId) => {
    scroll.scrollTo(sectionId, {
        duration: 500, // Scroll duration in milliseconds
        smooth: true, // Enable smooth scrolling
    });
};


export default function Navbar() {
    return (
        <div>
            <nav className="navbar fixed-top navbar bg-dark " data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Portfolio</a>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
                    <ul className="nav justify-content-end">
                        <li className="nav-item">
                            <Link to="intro" spy={true} smooth={true} duration={500}  className="nav-link ">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" spy={true} smooth={true} duration={500} className="nav-link">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="education" spy={true} smooth={true} duration={500} className="nav-link">Education</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" spy={true} smooth={true} duration={500} onClick={() => scrollToSection("contact")} className="nav-link">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
