import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    let history = useHistory()
    const {  currentPage, setCurrentPage, openedPortfolio, setOpenedPortfolio  } = useContext(AppContext)

    useEffect(() => {
        
    }, [])

    const redirect = (e) => {
        let id = e.target.id;
        if(currentPage === id.slice(0, id.length - 4)) return

        let bodyDiv = document.querySelector('.middle-body')
        
        if (id === 'about-tab') {
            let elmnt = document.querySelector('.about-middle');
            elmnt.scrollIntoView({
                behavior: 'smooth'
            });
        }

        if(id === 'skills-tab') {

        }

        if (id === 'projects-tab') {
            let elmnt = document.querySelector('.projects-middle');
            elmnt.scrollIntoView({
                behavior: 'smooth'
            });
        }

        setTimeout(() => {
            if (id === 'about-tab') history.push('./about')
            if (id === 'skills-tab') history.push('./about')
            if (id === 'projects-tab') history.push('./projects')
        }, 2000)
    }

    return (
        <div className="navbar">
            <div className="tabs-container">
                <p className="tabs" onClick={redirect} id="about-tab">About</p>
                <p className="tabs" onClick={redirect} id="skills-tab">Skills</p>
                <p className="tabs" onClick={redirect} id="projects-tab">Projects</p>
                <p className="tabs" onClick={redirect} id="contact-tab">Contact Me</p>
            </div>
            <div className="name-tab">
                <h1 className="name-header">Rocky Yang</h1>
            </div>
        </div>
    );
}

export default Navbar;
