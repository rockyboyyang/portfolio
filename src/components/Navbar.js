import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    let history = useHistory()

    useEffect(() => {
    }, [])

    const redirect = (e) => {
        let id = e.target.id;
        console.log(id)
    }

    return (
        <div className="navbar">
            <div className="tabs-container">
                <p className="tabs" onClick={redirect} id="about-tab">About</p>
                <p className="tabs" onClick={redirect} id="skills-tab">Skills</p>
                <p className="tabs" onClick={redirect} id="projects-tab">Projects</p>
                <p className="tabs" onClick={redirect} id="contact-tab">Contact Me</p>
            </div>
        </div>
    );
}

export default Navbar;
