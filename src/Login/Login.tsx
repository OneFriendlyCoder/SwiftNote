import React from 'react'
import './login.css'
import dino1 from '../assets/dino.mp4'

const Login = () => {
  return (
	<div className='pt1'>
	<div className="form-structor1">
		<div className="login">
			<h2 className="form-title1" id="login">Login</h2>
			<div className="form-holder1">
				<input type="email" className="input" placeholder="Email" />
				<input type="password" className="input" placeholder="Password" />
			</div>
			<button className="submit-btn1">Login</button>
		</div>
	</div>
	</div>
  )
}

export default Login