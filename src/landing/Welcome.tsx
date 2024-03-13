import dino1 from '../assets/dino.mp4'
import React from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import './video.css'
import { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';

const Welcome = () => {

  const navigate = useNavigate();
   return (
    <div className='main'>
      <video autoPlay loop muted className="video">
        <source src={dino1} type="video/mp4"/>            
      </video>
      <div className='overlay'></div>
      <div className='content'>
        <h1 className='head1'>SwiftNOTE</h1>
      </div>
      <div className='button-select'>
          <button className="button" onClick={()=>{navigate("/signup")}}><span>Register</span><i></i></button>
          <button className="button" onClick={()=>{navigate("/login")}}><span>Login</span><i></i></button>
      </div>
    </div>
  )
}

export default Welcome