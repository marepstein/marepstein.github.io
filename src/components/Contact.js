import React from 'react'
import Fade from 'react-reveal/Fade'

const Contact = () => {


  return   <Fade left><div className="section" id="contact">
    <div className="container">
      <div className="title">Contact Me</div>
      <div className="container" id="icons">
        <div className="subtitle"><strong style={{ color: '#FFF' }}><a href="https://www.github.com/marepstein">Github:</a></strong> 
          <br />
          <p>github.com/marepstein</p></div>
        <div className="subtitle"><strong style={{ color: '#FFF' }}><a href="mailto:marissaepstein@outlook.com">Email:</a></strong>
          <br />
          <p>marissaepstein@outlook.com</p></div>
        <div className="subtitle"><strong style={{ color: '#FFF' }}><a href="https://www.linkedin.com/in/marissaepstein/">LinkedIn:</a></strong>
          <br />
          <p>linkedin.com/in/marissaepstein</p></div>
      </div>
    </div>
  </div>
  </Fade>


}

export default Contact 