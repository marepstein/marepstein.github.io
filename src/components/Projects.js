import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const Projects = () => {

  return <div className="proj-section" id="projects">
    <div className="container">
      <Fade right> 
        <div className="title" id="project-title">Projects</div>
      </Fade>
    </div>
    <div className="section">
      <Fade top>
        <div className="container" id="proj-1"> 
          <figure className="image"><a href="https://marepstein.github.io/project-1/"><img src="https://i.imgur.com/rNT6Twp.png" /></a></figure>
          <div className="info">
            <h1>Project One</h1>
            <p>A modern version of the arcade game, using HTML, CSS and JavaScript. The game included aliens that move towards the player, keyboard movement of the player, bombs from randomized aliens , bullets from players keyboard, scoring and sound effects. </p>
          </div>
        </div>
      </Fade>

      <Fade left>
        <div className="container" id="proj-1"> 
          <div className="info">
            <h1>Project Two</h1>
            <p>A modern version of the arcade game, using HTML, CSS and JavaScript. The game included aliens that move towards the player, keyboard movement of the player, bombs from randomized aliens , bullets from players keyboard, scoring and sound effects. </p>
          </div>
          <figure className="image"><img src="https://i.imgur.com/Vmtbptm.png" /></figure>
        </div>
      </Fade>
	
      <Fade right>
        <div className="container" id="proj-1"> 
          <figure className="image"><img src="https://i.imgur.com/sbIPJUk.png" /></figure>
          <div className="info">
            <h1>Project Three</h1>
            <p>A modern version of the arcade game, using HTML, CSS and JavaScript. The game included aliens that move towards the player, keyboard movement of the player, bombs from randomized aliens , bullets from players keyboard, scoring and sound effects. </p>
          </div>
        </div>
      </Fade>
		
      <Fade left>
        <div className="container" id="proj-1"> 
          <div className="info">
            <h1>Project Four</h1>
            <p>A modern version of the arcade game, using HTML, CSS and JavaScript. The game included aliens that move towards the player, keyboard movement of the player, bombs from randomized aliens , bullets from players keyboard, scoring and sound effects. </p>
          </div>
          <figure className="image"><img src="https://i.imgur.com/yetNxIp.png" /></figure>
        </div>
      </Fade>
    </div> 
  </div>

}

export default withRouter(Projects)