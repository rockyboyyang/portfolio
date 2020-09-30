import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    let history = useHistory()

    useEffect(() => {
    }, [])


    return (
        <div className="navbar">
            <div className="tabs-container">
                <p className="tabs">About</p>
                <p className="tabs">Skills</p>
                <p className="tabs">Projects</p>
                <p className="tabs">Contact Me</p>
            </div>
        </div>
    );
}

export default Navbar;
