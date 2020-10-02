import React, { useState, useEffect, useContext } from 'react';
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
    const { currentPage, setCurrentPage, openedPortfolio, setOpenedPortfolio } = useContext(AppContext)

    useEffect(() => {
        setCurrentPage('skills')

        let cssLogoContainer = document.querySelector('.css-logo-container')
        cssLogoContainer.style.animation = "entering_from_far_left 1s"
        cssLogoContainer.style.transform = "translateX(0%)"

        let expressLogoContainer = document.querySelector('.express-logo-container')
        expressLogoContainer.style.animation = "entering_from_far_left 1s"
        expressLogoContainer.style.transform = "translateX(0%)"

        let flaskLogoContainer = document.querySelector('.flask-logo-container')
        flaskLogoContainer.style.animation = "entering_from_far_left 1s"
        flaskLogoContainer.style.transform = "translateX(0%)"

        let herokuLogoContainer = document.querySelector('.heroku-logo-container')
        herokuLogoContainer.style.animation = "entering_from_far_left 1s"
        herokuLogoContainer.style.transform = "translateX(0%)"

        let htmlLogoContainer = document.querySelector('.html-logo-container')
        htmlLogoContainer.style.animation = "entering_from_far_left 1s"
        htmlLogoContainer.style.transform = "translateX(0%)"

        let sequelizeLogoContainer = document.querySelector('.sequelize-logo-container')
        sequelizeLogoContainer.style.animation = "entering_from_far_left 1s"
        sequelizeLogoContainer.style.transform = "translateX(0%)"

        let javascriptLogoContainer = document.querySelector('.javascript-logo-container')
        javascriptLogoContainer.style.animation = "entering_from_far_right 1s"
        javascriptLogoContainer.style.transform = "translateX(0%)"

        let mysqlLogoContainer = document.querySelector('.mysql-logo-container')
        mysqlLogoContainer.style.animation = "entering_from_far_right 1s"
        mysqlLogoContainer.style.transform = "translateX(0%)"

        let postgresqlLogoContainer = document.querySelector('.postgresql-logo-container')
        postgresqlLogoContainer.style.animation = "entering_from_far_right 1s"
        postgresqlLogoContainer.style.transform = "translateX(0%)"

        let pythonLogoContainer = document.querySelector('.python-logo-container')
        pythonLogoContainer.style.animation = "entering_from_far_right 1s"
        pythonLogoContainer.style.transform = "translateX(0%)"

        let reactLogoContainer = document.querySelector('.react-logo-container')
        reactLogoContainer.style.animation = "entering_from_far_right 1s"
        reactLogoContainer.style.transform = "translateX(0%)"

        let header = document.querySelector('.skills-middle')
        header.style.animation = "entering_from_right 1s"
        header.style.transform = "translateX(0%)"

    

        let navbar = document.querySelector('.navbar')
        let footer = document.querySelector('.footer')
        if (openedPortfolio === false) {
            navbar.style.animation = "entering_from_right 1s"
            footer.style.animation = "entering_from_right 1s"
        }
        navbar.style.transform = "translateX(0%)"
        footer.style.transform = "translateX(0%)"
        setOpenedPortfolio(true)
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
