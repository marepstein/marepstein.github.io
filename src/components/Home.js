import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// import { useState, useEffect, useRef } from 'react'
// import ReactTypingEffect from 'react-typing-effect'
import Fade from 'react-reveal/Fade'
import { Link, animateScroll as scroll } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'


const Home = () => {

  console.log(location)

  return <div className="home-section">
    <div className="section"  id="home">
      <div className="container">
        <Fade top>
          <div className="title">Marissa Epstein</div>
        </Fade>
        <div className="container" id="home-subtitle">
          <Fade top cascade>
            <div className="subtitle" id="junior">Junior</div>
          </Fade>
          <Fade bottom cascade>
            <div className="subtitle">Developer</div>
          </Fade>
        </div>
      </div>
    </div>
   

   
    {/* <div className="tech-section">
      <div className="subtitle">Technologies</div>
      <div className="technologies">
				
      </div>
    </div> */}
  </div>
 
}

export default withRouter(Home)