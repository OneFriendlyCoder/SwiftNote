import React from 'react'
import './login.css'
import logvid from '../assets/loginvid.mp4'
import { useNavigate } from 'react-router-dom'

const Login = () => {

	const navigate = useNavigate();

  return (
	<div className='pt2'>
		<video autoPlay muted loop id="background-video2">
        	<source src={logvid} type="video/mp4" />
      	</video>
	<div className="form-structor1">
		<div className="login">
			<h2 className="form-title1" id="login">Login</h2>
			<div className="form-holder1">
				<input type="email" className="input" placeholder="Email" />
				<input type="password" className="input" placeholder="Password" />
			</div>
			<button className="submit-btn1" onClick={()=>{navigate("/draw")}}>Login</button>
			<button className="submit-btn1" onClick={()=>{navigate("/")}}>Home</button>
		</div>
	</div>
	</div>
  )
}

export default Login