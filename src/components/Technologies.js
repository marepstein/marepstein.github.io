import React, { useState, useEffect } from 'react'
import { loadCSS } from 'fg-loadcss'
import Fade from 'react-reveal/Fade'



const Technologies = () => {

  const [showText, setShowText] = useState(false)
	
  useEffect(() => {
    loadCSS(
      'https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css',
    )
  }, [])
 

  return 	<Fade left><div className="tech-section">
    <Fade right>
      <div className="tech-container is-half-mobile">
        <div className="header">My Technology Stack</div>
        <div className="columns is-multiline is-mobile">
          <div className="column is-half-desktop is-half-mobile">
            <div className="info">
              <p><strong>Languages and frameworks:</strong> HTML, CSS, JavaScript, React, Bulma, Node.js, Webpack,  Mongoose, Express, Python 3, Django</p>
              <br />
              <p> <strong>Databases:</strong> MongoDB, SQL</p>
              <br />
              <p><strong>Management & Deployment:</strong> Git, Github, npm, yarn, pip3, Heroku, gh-pages</p>
              <br />
              <p><strong>Methodologies:</strong> CRUD, REST, TDD, Trello, Slack</p>
              <br />
              <p><strong>Other:</strong> Adobe Creative Suite (Indesign, Photoshop and Lightroom - Beginner) </p>
              <br />
              <p><strong>Soft Skills:</strong> Teamwork, Adaptability, Creativity, Time Management (Trello), Communication (Slack)</p>
            </div>
          </div>
          <div className="column is-half-desktop is-half-mobile">
            <div className="grid-container is-one-quarter-mobile">
              {/* <div className="columns is-multiline">
          <div className="column is-one-half-desktop"> */}

              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-html5-plain' />
              </div>

              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-css3-plain' />
              </div>

              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-sass-original' />
              </div>

              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-javascript-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-react-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-babel-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-webpack-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-mongodb-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-express-original' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-nodejs-plain' />
              </div>
  
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-python-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-postgresql-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-django-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-git-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-heroku-original' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-mocha-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-photoshop-line' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-slack-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-visualstudio-plain' />
              </div>
              <div className="grid-item">
                <div style={{ fontSize: 35, color: 'white' }} className='devicon-trello-plain' />
              </div>
         
            </div>
          </div>
        </div>
      </div>
    </Fade>
  </div>
	</Fade>
	




}

export default Technologies