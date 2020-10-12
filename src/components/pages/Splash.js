import React, { useEffect } from 'react';
import { useHistory} from "react-router-dom";

const Splash = () => {
    let history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            transition()
        }, 6500)
    }, [])

    const transition = () => {
        let element = document.querySelector('.introduction-container')
        element.className += " transition-fade"

        setTimeout(() => {
            history.push('./about')
        }, 1000)
    }

    return (
        <div className="splash-page css-typing">
            <div className="introduction-container">
                <p className="introduction-sentence first-line">Hello, my name is Rocky Yang</p>
                <p className="introduction-sentence second-line">Please take a look at my portfolio!</p>
            </div>
        </div>
    );
}

export default Splash;
