import React, { useState} from 'react'

const Contact = (props) => {

	


  return <div className="section" id="contact">
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

        {/* <div className="columns is-mobile is-multiline">
          <div className="column" id="github">
            <div className="contact-img">	<img src="https://www.kindpng.com/picc/m/255-2558173_github-logo-png-transparent-png.png" /></div>
          </div>
          <div className="column">
            <div className="contact-img">	<img src="https://i.pinimg.com/originals/2b/b4/28/2bb428b7e4aa39078a119deccacae6f3.png" /></div>
          </div>
        </div> */}
      </div>
    </div>
  </div>


}

export default Contact 