import React, {  useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext'
import resume from '../assets/documents/yang_rocky_resume.pdf'

const Navbar = () => {
    const {  currentPage } = useContext(AppContext)

    useEffect(() => {
        
    }, [])

    const redirect = (e) => {
        let id = e.target.id;
        if(currentPage === id.slice(0, id.length - 4)) return

        
        if (id === 'about-tab') {
            let elmnt = document.querySelector('.about-middle');
            elmnt.scrollIntoView({
                behavior: 'smooth'
            });
        }

        if(id === 'skills-tab') {
            let elmnt = document.querySelector('.skills-outer-container');
            elmnt.scrollIntoView({
                behavior: 'smooth'
            });
        }

        if (id === 'projects-tab') {
            let elmnt = document.querySelector('.projects-middle');
            elmnt.scrollIntoView({
                behavior: 'smooth'
            });
        }

        if (id === 'contact-tab') {
            let elmnt = document.querySelector('.contact-body');
            elmnt.scrollIntoView({
                behavior: 'smooth'
            });
        }

        // if (id === 'resume-tab') {
        //     window.open(resume, '_blank')
        // }
    }

    return (
        <div className="navbar">
            <div className="tabs-container">
                <p className="tabs" onClick={redirect} id="about-tab">About</p>
                <p className="tabs" onClick={redirect} id="skills-tab">Skills</p>
                <p className="tabs" onClick={redirect} id="projects-tab">Projects</p>
                <p className="tabs" onClick={redirect} id="contact-tab">Contact Me</p>
                {/* <p className="tabs" onClick={redirect} id="resume-tab">Resume</p> */}
            </div>
            <div className="name-tab">
                <h1 className="name-header">Rocky Yang</h1>
            </div>
        </div>
    );
}

export default Navbar;
