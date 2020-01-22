import React from 'react'
// import { useState, useEffect, useRef } from 'react'
import ReactTypingEffect from 'react-typing-effect'


const Home = () => {

  return <div className="section is-full-height" id="home">
    <div className="container">
      <ReactTypingEffect
        text={[ 'Marissa Epstein.', 'Junior Web Developer.' ]}
        speed='150'
        cursor='|'
        className='typing'
        eraseDelay='300'
      />
    </div>
  </div>
    
}

export default Home