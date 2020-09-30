import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'

const Home = () => {
    let history = useHistory()
    const transition = () => {
        history.push('./home')
    }

    return (
        <div className="splash-page css-typing transition-fade" id='swup'>
            <p className="introduction-sentence first-line">Hello, my name is Rocky Yang</p>
            <p className="introduction-sentence second-line">I am the developer YOU are looking for</p>
            <div className="go-to-home-button" onClick={transition}>Portfolio</div>
        </div>
    );
}

export default Home;
