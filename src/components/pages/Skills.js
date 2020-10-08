import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import Navbar from '../Navbar'
import Footer from '../Footer'
import profilePic from '../../assets/images/profile-pic2.jpg'


const Skills = () => {
    let history = useHistory()
    const { currentPage, setCurrentPage, openedPortfolio, setOpenedPortfolio } = useContext(AppContext)

    useEffect(() => {
        setCurrentPage('skills')

        // let cssLogoContainer = document.querySelector('.css-logo-container')
        // cssLogoContainer.style.animation = "entering_from_far_left 1s"
        // cssLogoContainer.style.transform = "translateX(0%)"

        // let expressLogoContainer = document.querySelector('.express-logo-container')
        // expressLogoContainer.style.animation = "entering_from_far_left 1s"
        // expressLogoContainer.style.transform = "translateX(0%)"

        // let flaskLogoContainer = document.querySelector('.flask-logo-container')
        // flaskLogoContainer.style.animation = "entering_from_far_left 1s"
        // flaskLogoContainer.style.transform = "translateX(0%)"

        // let herokuLogoContainer = document.querySelector('.heroku-logo-container')
        // herokuLogoContainer.style.animation = "entering_from_far_left 1s"
        // herokuLogoContainer.style.transform = "translateX(0%)"

        // let htmlLogoContainer = document.querySelector('.html-logo-container')
        // htmlLogoContainer.style.animation = "entering_from_far_left 1s"
        // htmlLogoContainer.style.transform = "translateX(0%)"

        // let sequelizeLogoContainer = document.querySelector('.sequelize-logo-container')
        // sequelizeLogoContainer.style.animation = "entering_from_far_left 1s"
        // sequelizeLogoContainer.style.transform = "translateX(0%)"

        // let javascriptLogoContainer = document.querySelector('.javascript-logo-container')
        // javascriptLogoContainer.style.animation = "entering_from_far_right 1s"
        // javascriptLogoContainer.style.transform = "translateX(0%)"

        // let mysqlLogoContainer = document.querySelector('.mysql-logo-container')
        // mysqlLogoContainer.style.animation = "entering_from_far_right 1s"
        // mysqlLogoContainer.style.transform = "translateX(0%)"

        // let postgresqlLogoContainer = document.querySelector('.postgresql-logo-container')
        // postgresqlLogoContainer.style.animation = "entering_from_far_right 1s"
        // postgresqlLogoContainer.style.transform = "translateX(0%)"

        // let pythonLogoContainer = document.querySelector('.python-logo-container')
        // pythonLogoContainer.style.animation = "entering_from_far_right 1s"
        // pythonLogoContainer.style.transform = "translateX(0%)"

        // let reactLogoContainer = document.querySelector('.react-logo-container')
        // reactLogoContainer.style.animation = "entering_from_far_right 1s"
        // reactLogoContainer.style.transform = "translateX(0%)"

        // let header = document.querySelector('.skills-middle')
        // header.style.animation = "entering_from_right 1s"
        // header.style.transform = "translateX(0%)"

    

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
            <div className="middle-body about-middle-body">
                <div className="middle-body-header about-middle">
                    <h1>About</h1>
                    <div className="underline-about"></div>
                </div>
                <div className="picture-description-container">
                    <div className='picture-container'>
                        <img src={profilePic} id='profile-pic'></img>
                    </div>
                    <div className='description-outer-container'>
                        <div className='description-inner-container'>
                            <h2>Who am I?</h2>
                            <p id="description-text">I’m a passionate software developer with the innovative and creative mindset of an entrepreneur. I am always looking forward to any challenge. I'm an enthusiastic teammate and always bring a positive atmosphere wherever I go. I am forward-thinking, and I love creating new ideas to showcase my skillset. Programming has been my outlet for problem-solving and creative expression. Languages that I love are Javascript and Python. I also have great experience working in jsNode, React, SQL, SQLAlchemy, Postgresql, Flask, HTML5, CSS3, Express, and Git. When my programming cape is off, I like to play video games and spend time with friends and family.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Skills;
