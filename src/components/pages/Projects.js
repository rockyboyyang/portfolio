import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import Navbar from '../Navbar'
import Footer from '../Footer'
// import profilePic from '../../assets/images/profile-pic2.jpg'

const Projects = () => {
    let history = useHistory()
    const { currentPage, setCurrentPage, openedPortfolio, setOpenedPortfolio } = useContext(AppContext)

    useEffect(() => {
        setCurrentPage('projects')

    }, [])


    return (
        <div className="projects-page main-body">
            <Navbar />
            <div className="middle-body projects-middle-body">
            </div>
            <Footer />
        </div>
    );
}

export default Projects;
