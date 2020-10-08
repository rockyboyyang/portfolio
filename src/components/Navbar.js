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

        if (currentPage === 'about') {
            // let pictureContainer = document.querySelector('.picture-container')
            // pictureContainer.style.animation = "exiting_through_top 1s"
            // pictureContainer.style.transform = "translateY(-100%)"

            // let descriptionContainer = document.querySelector('.description-outer-container')
            // descriptionContainer.style.animation = "exiting_through_bottom 1s"
            // descriptionContainer.style.transform = "translateY(100%)"

            // let header = document.querySelector('.about-middle')
            // header.style.animation = "exiting_through_right 1s"
            // header.style.transform = "translateX(-100%)"
        }

        if (currentPage === 'skills') {
            // let cssLogoContainer = document.querySelector('.css-logo-container')
            // cssLogoContainer.style.animation = "exiting_through_far_right 1.5s"
            // cssLogoContainer.style.transform = "translateX(1000%)"

            // let expressLogoContainer = document.querySelector('.express-logo-container')
            // expressLogoContainer.style.animation = "exiting_through_far_right 1.5s"
            // expressLogoContainer.style.transform = "translateX(1000%)"

            // let flaskLogoContainer = document.querySelector('.flask-logo-container')
            // flaskLogoContainer.style.animation = "exiting_through_far_right 1.5s"
            // flaskLogoContainer.style.transform = "translateX(1000%)"

            // let herokuLogoContainer = document.querySelector('.heroku-logo-container')
            // herokuLogoContainer.style.animation = "exiting_through_far_right 1.5s"
            // herokuLogoContainer.style.transform = "translateX(1000%)"

            // let htmlLogoContainer = document.querySelector('.html-logo-container')
            // htmlLogoContainer.style.animation = "exiting_through_far_right 1.5s"
            // htmlLogoContainer.style.transform = "translateX(1000%)"

            // let sequelizeLogoContainer = document.querySelector('.sequelize-logo-container')
            // sequelizeLogoContainer.style.animation = "exiting_through_far_right 1.5s"
            // sequelizeLogoContainer.style.transform = "translateX(1000%)"

            // let javascriptLogoContainer = document.querySelector('.javascript-logo-container')
            // javascriptLogoContainer.style.animation = "exiting_through_far_left 1.5s"
            // javascriptLogoContainer.style.transform = "translateX(1000%)"

            // let mysqlLogoContainer = document.querySelector('.mysql-logo-container')
            // mysqlLogoContainer.style.animation = "exiting_through_far_left 1.5s"
            // mysqlLogoContainer.style.transform = "translateX(1000%)"

            // let postgresqlLogoContainer = document.querySelector('.postgresql-logo-container')
            // postgresqlLogoContainer.style.animation = "exiting_through_far_left 1.5s"
            // postgresqlLogoContainer.style.transform = "translateX(1000%)"

            // let pythonLogoContainer = document.querySelector('.python-logo-container')
            // pythonLogoContainer.style.animation = "exiting_through_far_left 1.5s"
            // pythonLogoContainer.style.transform = "translateX(1000%)"

            // let reactLogoContainer = document.querySelector('.react-logo-container')
            // reactLogoContainer.style.animation = "exiting_through_far_left 1.5s"
            // reactLogoContainer.style.transform = "translateX(1000%)"

            // let header = document.querySelector('.skills-middle')
            // header.style.animation = "exiting_through_far_left 1.5s"
            // header.style.transform = "translateX(1000%)"
        }
        
        if (id === 'about-tab') {
            setCurrentPage('about')
            // bodyDiv.style.animation = "change_from_white_to_purple 2.5s"
            // bodyDiv.style.backgroundColor = "#a4508b"
            // bodyDiv.style.backgroundImage = "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"
        }

        if(id === 'skills-tab') {
            setCurrentPage('skills')
            // bodyDiv.style.animation = "change_from_purple_to_white 2.5s"
            // bodyDiv.style.backgroundColor = "#b8c6db"
            // // bodyDiv.style.backgroundImage = "linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%)"
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
        </div>
    );
}

export default Navbar;
