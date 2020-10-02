import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import Navbar from '../Navbar'
import Footer from '../Footer'
import cssLogo from '../../assets/images/css.png'
import expressLogo from '../../assets/images/express.png'
import flaskLogo from '../../assets/images/flask.png'
import herokuLogo from '../../assets/images/heroku.png'
import htmlLogo from '../../assets/images/html.png'
import javascriptLogo from '../../assets/images/javascript.png'
import mysqlLogo from '../../assets/images/mysql.png'
import postgresqlLogo from '../../assets/images/postgresql.png'
import pythonLogo from '../../assets/images/python.png'
import reactLogo from '../../assets/images/react.png'
import sequelizeLogo from '../../assets/images/sequelize.png'

const Skills = () => {
    let history = useHistory()

    useEffect(() => {
    }, [])


    return (
        <div className="about-page main-body">
            <Navbar />
            <div className="middle-body skills-middle-body">
                <div className="middle-body-header skills-middle">
                    <h1>Skills</h1>
                    <div className="underline-skills"></div>
                </div>
                <div className="skills-outer-container">
                    <div className="skills-inner-container">
                        <div className="css-logo-container">
                            <img src={cssLogo}></img>
                        </div>
                        <div className="express-logo-container">
                            <img src={expressLogo}></img>
                        </div>
                        <div className="flask-logo-container">
                            <img src={flaskLogo}></img>
                        </div>
                        <div className="heroku-logo-container">
                            <img src={herokuLogo}></img>
                        </div>
                        <div className="html-logo-container">
                            <img src={htmlLogo}></img>
                        </div>
                        <div className="javascript-logo-container">
                            <img src={javascriptLogo}></img>
                        </div>
                        <div className="mysql-logo-container">
                            <img src={mysqlLogo}></img>
                        </div>
                        <div className="postgresql-logo-container">
                            <img src={postgresqlLogo}></img>
                        </div>
                        <div className="python-logo-container">
                            <img src={pythonLogo}></img>
                        </div>
                        <div className="react-logo-container">
                            <img src={reactLogo}></img>
                        </div>
                        <div className="sequelize-logo-container">
                            <img src={sequelizeLogo}></img>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Skills;
