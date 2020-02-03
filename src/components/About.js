import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const About = () => {

  console.log(location)

  return  <div className="section" id="about">
    <Fade left>
      <div className="container">
        <div className="header-image"><img src="https://i.imgur.com/nguIDG2.jpg" /></div>
        <div className="title" id="about-title">About Me</div>
        <div className="container" id="about-blurb">
          <div className="info">
		I have always found the influence of technology on our modern world fascinating. 
		At university, I was able to extend my knowledge through the studies of technology on business-related issues, including ways in which it can help or hinder a company, particularly in terms of branding. 
		I then became part of a small team, which set up an online creative platform documenting student night-life and adopted the role of web designer. 
		I used SquareSpace and Wix to curate a number of different websites based on my teams vision, which kickstarted my drive to become a developer. 
		I loved how I was able to draw on my creative side and found it motivating how quickly I could come up with a final product. 
            <br /> 
            <br /> 
            <br /> 
		The General Assembly Software Engineering Immersive was the perfect environment for me to learn, and has allowed me to combine my creative interests with a new coding skillset, which I am excited to continue to develop. 
		I hope to be part of an innovative, fast-paced organisation, which allows me to thrive as a junior developer.
          </div>
        </div>
        <div className="container" id="education">
          <div className="section">
            <div className="columns is-mobile is-multiline">
              <div className="column" id="about-bottom">
                <div className="title" style={{ fontSize: 20 }}>Education</div>
                <p><strong>General Assembly | Oct '19 - Jan '20</strong> <br/> Software Engineering Immersive</p>
              
                <p><strong>University of Nottingham | Sep '16 - June '19 </strong> <br/> BSc Management 2:1 </p>
             
              </div>
              <div className="column" id="about-bottom">
                <div className="title" style={{ fontSize: 20 }}>Experience</div>
                <p><strong>Osprey London | Oct '15 - Oct '19</strong> <br/> Part-time Sales Assistant</p>
                <p><strong> Churchill Contract Services | Jul '15 - Sept '16 </strong> <br/> Admin Assistant</p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </Fade>
  </div>

}

export default withRouter(About)
