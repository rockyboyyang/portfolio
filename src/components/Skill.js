import React, { useState, useContext } from 'react';
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/AppContext'

const Skill = ({ skill, percentage }) => {
    const { currentPage, setCurrentPage, openedPortfolio, setOpenedPortfolio } = useContext(AppContext)
    return (
        <div className={`skill-div`}>
            <div className="skill-name-div">
                <span>{skill}</span>
            </div>
            <div className="skill-outer-inner-container">
                <div className={`skill-outer`}>
                    <div className={`skill-inner-${skill}`}></div>
                </div>
                <span>{percentage}%</span>
            </div>
        </div>
    )
}

export default Skill;
