import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'

const Splash = () => {
    let history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            let button = document.querySelector('.go-to-home-button')
            button.className += " transition-fade-in"
        }, 6500)
    }, [])

    const transition = () => {
        let element = document.querySelector('.introduction-container')
        element.className += " transition-fade"
        console.log(element)
        setTimeout(() => {
            history.push('./about')
        }, 2000)
    }

    return (
        <div className="splash-page css-typing">
            <div className="introduction-container">
                <p className="introduction-sentence first-line">Hello, my name is Rocky Yang</p>
                <p className="introduction-sentence second-line">I am the developer YOU are looking for</p>
                <div className="go-to-home-button" onClick={transition}><p>Portfolio</p></div>
            </div>
        </div>
    );
}

export default Splash;
