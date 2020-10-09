import React, { useEffect } from 'react';
import { useHistory} from "react-router-dom";

const Splash = () => {
    let history = useHistory()

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

        setTimeout(() => {
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
