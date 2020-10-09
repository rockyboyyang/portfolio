import React, { useEffect } from 'react';
import Navbar from '../Navbar'
import Skill from '../Skill'
import Footer from '../Footer'
import profilePic from '../../assets/images/profile-pic2.jpg'
import chessVideo from '../../assets/videos/chess.mp4'
import pokechampionsVideo from '../../assets/videos/pokechampions.mp4'
import carlVideo from '../../assets/videos/carl.mp4'
import swipefairVideo from '../../assets/videos/swipefair.mp4'

const About = () => {

    useEffect(() => {
        let splitting = document.querySelector('.splitting-containers')

        setTimeout(() => {
            let left = document.querySelector('.left-container')
            let right = document.querySelector('.right-container')
            left.style.animation = "exiting_through_far_left 6s"
            right.style.animation = "exiting_through_far_right 6s"
            left.style.transform = "translateX(1000%)"
            right.style.transform = "translateX(-1000%)"
        }, 1000)

         setTimeout(() => {
            let navbar = document.querySelector('.navbar')
            navbar.style.animation = "entering_from_right 1s"
            navbar.style.transform = "translateX(0%)"
            let blurred = document.querySelector('.unblurred-text')
            blurred.className += " transition-fade-in"
            splitting.style.display = "none"
        }, 2000)

    }, [])

    const redirectToSite = (e) => {
        e.preventDefault()
        let website = e.target.id

        if(website === "chesslive") {
            window.open("https://powerful-mountain-20313.herokuapp.com/", '_blank')
        }

        if(website === "chessrepo") {
            window.open("https://github.com/rockyboyyang/chess", '_blank')
        }

        if (website === "pokechampionslive") {
            window.open("https://pokechampions.herokuapp.com/", '_blank')
        }

        if (website === "pokechampionsrepo") {
            window.open("https://github.com/rockyboyyang/Pokechampions-FrontEnd", '_blank')
        }

        if (website === "carllive") {
            window.open("https://hidden-fortress-08833.herokuapp.com/", '_blank')
        }

        if (website === "carlrepo") {
            window.open("https://github.com/ColeRutledge/Asana-Clone", '_blank')
        }

        if (website === "swipefairlive") {
            window.open("https://swipefair.herokuapp.com/", '_blank')
        }

        if (website === "swipefairrepo") {
            window.open("https://github.com/rockyboyyang/swipefair-frontend", '_blank')
        }
    }


    return (
        <div className="about-page main-body">
            <div className="splitting-containers">
                <div className="left-container"></div>
                <div className="right-container"></div>
            </div>
            <Navbar />
            <div className="middle-body about-middle-body">
                <div className="home-page-header-container">
                    {/* <h1 className="introduction">Welcome to my Portfolio</h1> */}
                    {/* Welcome to my Portfolio */}
                    <div className="home-page-header">
                        <div className="home-page-header-low-black">
                        </div>
                    </div>
                    <div className="unblurred-text">
                        <h1 className="introduction">Welcome</h1>
                        <h1 className="introduction">to my</h1>
                        <h1 className="introduction">Portfolio</h1>
                    </div> 
                </div>
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
                <div className="skills-description-container">
                    <div className="extra-description-container">
                        <div className="information-container">
                            <h2>Rocky Yang</h2>
                            <h3>Software Developer</h3>
                            <span>You could say my passion as a programmer sparked when I took a CS class in college in my Fall 2015 semester. Because it was only an intro class I only learned arrays, loops, and functions.  We created fun games, such as tic-tac-toe, High or Low, and many other simple games.  I also had a blast solving little puzzles and enjoyed the feeling of solving a coding challenge.  Software developing makes me feel like I’m an artist. My screen is a blank canvas and my keyboard is my paintbrush.  Artists utilized different techniques and strokes to create a masterful painting and I do the same with my code to create a fully functional application out of nothing. If you’re looking for a software developer with experience in Python, JavaScript, React, and Express to complete your team, then you’ve found the right person.</span>
                        </div>
                    </div>
                    <div className="skills-outer-container">
                        <h2>Skills</h2>
                        <div className="skills-inner-container">
                            <Skill skill="JavaScript" percentage={85}/>
                            <Skill skill="CSS" percentage={80}/>
                            <Skill skill="HTML" percentage={80}/>
                            <Skill skill="Python" percentage={65}/>
                            <Skill skill="React" percentage={80}/>
                            <Skill skill="Git" percentage={80}/>
                            <Skill skill="Flask" percentage={70}/>
                            <Skill skill="Express" percentage={65}/>
                            <Skill skill="SQL" percentage={80}/>
                        </div>
                    </div>
                </div>
                <div className="projects-div-container">
                    <div className="middle-body-header projects-middle">
                        <h1>Projects</h1>
                        <div className="underline-project"></div>
                    </div>
                    <div className="projects-body">
                        <div className="chess-tab project-tab-left project-tab">
                            <div className="project-video">
                                <video src={chessVideo} autoplay="true" loop="true"></video>
                            </div>
                            <div className="project-description-container">
                                <div className="project-description">
                                    <h1>Chess</h1>
                                    <h4 className="project-summary">Chess is a two-player strategy board game that is played on an 8 x 8 checker-patterned game-board with 64 total squares.</h4>
                                    <h4>JavaScript, React, HTML, CSS,  Express, Websockets</h4>
                                    <div className="live-github-button">
                                        <div className="live-button button" onClick={redirectToSite} id="chesslive">Live</div>
                                        <div className="github-button button" onClick={redirectToSite} id="chessrepo">GitHub</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="break-div"></div>
                        <div className="pokechampions-tab project-tab-right project-tab">
                            <div className="project-description-container">
                                <div className="project-description">
                                    <h1>Pokechampions</h1>
                                    <h4 className="project-summary">An application that allows the user to take on the Kanto League in the world of Pokemon.  Select six of your favorite Pokemon, and challenge the pokemon League and see if you can become the new Champion!</h4>
                                    <h4>JavaScript, React, HTML, CSS,  Python, Flask, SQLAlchemy, PSQL, Postgres</h4>
                                    <div className="live-github-button">
                                        <div className="live-button button" onClick={redirectToSite} id="pokechampionslive">Live</div>
                                        <div className="github-button button" onClick={redirectToSite} id="pokechampionsrepo">GitHub</div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-video">
                                <video src={pokechampionsVideo} autoplay="true" loop="true"></video>
                            </div>
                        </div>
                        <div className="break-div"></div>
                        <div className="carl-tab project-tab-left project-tab">
                            <div className="project-video">
                                <video src={carlVideo} autoplay="true" loop="true"></video>
                            </div>
                            <div className="project-description-container">
                                <div className="project-description">
                                    <h1>C.A.R.L.</h1>
                                    <h4 className="project-summary">CARL is a work-flow application to help users organize their tasks.  Tasks can be assigned to specific projects where they can be organized into categories.</h4>
                                    <h4>JavaScript, React, HTML, CSS, PostgreSQL, Sequelize, Express, PUG, TDD</h4>
                                    <div className="live-github-button">
                                        <div className="live-button button" onClick={redirectToSite} id="carllive">Live</div>
                                        <div className="github-button button" onClick={redirectToSite} id="carlrepo">GitHub</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="break-div"></div>
                        <div className="swipefair-tab project-tab-right project-tab">
                            <div className="project-description-container">
                                <div className="project-description">
                                    <h1>Swipefair</h1>
                                    <h4 className="project-summary"> An application that combines the concepts of Tinder and LinkedIn. By being able to swipe whether you’re a company looking to hire or a jobseeker and will connect a jobseeker with a company when both swiped each other</h4>
                                    <h4>JavaScript, React, HTML, CSS,  Python, Flask, SQLAlchemy, PSQL, Postgres</h4>
                                    <div className="live-github-button">
                                        <div className="live-button button" onClick={redirectToSite} id="swipefairlive">Live</div>
                                        <div className="github-button button" onClick={redirectToSite} id="swipefairrepo">GitHub</div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-video">
                                <video src={swipefairVideo} autoplay="true" loop="true"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact-body">
                <h1>Want to contact me?</h1>
                <h4>Email: yangrocky2013@gmail.com</h4>
                <h4>Phone: 1-612-396-5953</h4>
            </div>
            <Footer />
        </div>
    );
}

export default About;
