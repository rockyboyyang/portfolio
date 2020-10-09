import React from 'react';

const Skill = ({ skill, percentage }) => {

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
