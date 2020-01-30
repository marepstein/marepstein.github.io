import React, { useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import Fade from 'react-reveal/Fade'


const About = () => {

  console.log(location)


  // const refHook = useRef(initValue)
  // const didMountRef = useRef(false)

  // useEffect(() => {
  // 	if(prevProps.location.pathname !== props.location.pathname) {
			
  // 	}
  // }, [])

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
		The GA Software Engineering Immersive was the perfect environment for me to learn, and has allowed me to combine my creative interests with a new coding skillset, which I am excited to continue to develop. 
		I hope to be part of an innovative, fast-paced organisation, which allows me to thrive as a junior developer.
          </div>
        </div>
      </div>
			</Fade>
    </div>

}

export default withRouter(About)
