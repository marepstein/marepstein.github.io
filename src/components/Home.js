import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
// import { useState, useEffect, useRef } from 'react'
// import ReactTypingEffect from 'react-typing-effect'
import Fade from 'react-reveal/Fade'
import { Link, animateScroll as scroll } from 'react-scroll'
import { Parallax } from 'react-scroll-parallax'


const Home = () => {

  console.log(location)

  return <div className="section">
    <div className="section"  id="home">
      <div className="container">
        {/* <ReactTypingEffect
        text={[ 'Marissa Epstein.', 'Junior Web Developer.' ]}
        speed='150'
        cursor='|'
        className='typing'
        eraseDelay='300'
      /> */}

        <Fade top>
          <div className="title">Marissa Epstein</div>
        </Fade>
        {/* <div className="nav">
          <Fade top>
            <Link activeClass="active" className="link" onClick={() => scroll.scrollTo(800)} duration={500}>About</Link>
            <Link activeClass="active" className="link" onClick={() => scroll.scrollTo(1600)} duration={500}>Projects </Link>
            <Link activeClass="active" className="link" onClick={() => scroll.scrollTo(1000)} duration={500}>Technology Stack </Link>
          </Fade>
        </div> */}
        <Parallax className="custom-class" y={[-40, 30]} tagOuter="figure">
          {/* <LazyHero minHeight='40vh' parallaxOffset={2000} overflow='hidden' opacity={0} transitionDuration={0} id='swap-splash'> */}
          <Fade top cascade>
            <div className="subtitle" id="junior">Junior</div>
          </Fade>
          <Fade bottom cascade>
            <div className="subtitle">Developer</div>
          </Fade>
        </Parallax>
        {/* </LazyHero> */}
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