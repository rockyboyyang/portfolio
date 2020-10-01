import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'
import Navbar from '../Navbar'
import Footer from '../Footer'
import profilePic from '../../assets/images/profile-pic2.jpg'

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

export default About;
