import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import Navbar from '../Navbar'

const About = () => {
    let history = useHistory()

    useEffect(() => {
    }, [])


    return (
        <div className="about-page main-body">
            <Navbar />
        </div>
    );
}

export default About;
