import React, { useState } from 'react'



const Technologies = () => {

  const [showText, setShowText] = useState(false)
	

  return <div className='tech-section'>
    <div className='header'>My Technology Stack</div>
 
    <div className='container'>
      <div className="subtitle">Frontend</div>
      <div className="subtitle">Backend</div>
    </div>
  </div>


}

export default Technologies