import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import Navbar from '../Navbar'
import Footer from '../Footer'

const About = () => {
    let history = useHistory()

    useEffect(() => {
    }, [])


    return (
        <div className="about-page main-body">
            <Navbar />
            <div className="middle-body about-middle-body">
                <div className="middle-body-header">
                    <h1>About</h1>
                    <div className="underline"></div>
                </div>
                <div className="picture-description-container"></div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
