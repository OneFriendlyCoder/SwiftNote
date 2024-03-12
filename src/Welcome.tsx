import welcome1 from './assets/welcome2.mp4'
import React from 'react'
import './video.css'

const Welcome = () => {
  return (
    <div className='main'>
      <video autoPlay loop muted className="video">
        <source src={welcome1} type="video/mp4"/>            
      </video>
      <div className='overlay'></div>
      <div className='content'>
        <h1>Welcome to SwiftNOTE</h1>
        <p>This is my app</p>
      </div>
    </div>
  )
}

export default Welcome