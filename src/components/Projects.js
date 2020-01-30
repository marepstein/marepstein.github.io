import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'
import CarouselDisplay from './Carousel'
import LazyHero from 'react-lazy-hero'



const Projects = () => {

  return <div className="proj-section" id="projects">
    <div className="container">
      <div className="columns is-multiline">
        <div className="column" id="proj-column">
          <Fade right> 
            <div className="title" id="project-title">Projects</div>
          </Fade>
        </div>
        <div className="column" id="proj-column">
          <CarouselDisplay />
        </div>
      </div>
    </div> 
  </div> 
	
  


}

export default withRouter(Projects)