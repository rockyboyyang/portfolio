import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Route, Switch, useHistory, Redirect } from "react-router-dom";
import { AppContext } from '../../context/AppContext'

const Splash = () => {
    let history = useHistory()
    const { currentPage, setCurrentPage, openedPortfolio, setOpenedPortfolio } = useContext(AppContext)

    useEffect(() => {
        setTimeout(() => {
            let button = document.querySelector('.go-to-home-button')
            if(button) button.className += " transition-fade-in"
            else return
        }, 6500)
    }, [])

    const transition = () => {
        let element = document.querySelector('.introduction-container')
        element.className += " transition-fade"
        // element.style.display = "none"
        // let background = document.querySelector('.splash-page')
        // background.style.animation = "change_from_black_to_purple 2.5s"
        // let splitting = document.querySelector('.splitting-containers')
        // setTimeout(() => {
        //     splitting.style.display = "grid"
        // }, 1000)

        // setTimeout(() => {
        //     let left = document.querySelector('.left-container')
        //     let right = document.querySelector('.right-container')
        //     left.style.animation = "exiting_through_far_left 3s"
        //     right.style.animation = "exiting_through_far_right 3s"
        //     left.style.transform = "translateX(1000%)"
        //     right.style.transform = "translateX(-1000%)"
        // }, 2000)

        setTimeout(() => {
            // splitting.style.display = "none"
            history.push('./about')
        }, 1500)
    }

    return (
        <div className="splash-page css-typing">
            <div className="introduction-container">
                <p className="introduction-sentence first-line">Hello, my name is Rocky Yang</p>
                <p className="introduction-sentence second-line">Please take a look at my portfolio!</p>
                <div className="go-to-home-button" onClick={transition}><p>Portfolio</p></div>
            </div>
        </div>
    );
}

export default Splash;
