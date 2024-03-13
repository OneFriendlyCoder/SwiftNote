import React from 'react'
import './signup.css'
import dino1 from '../assets/dino.mp4'

const SignUp = () => {
  return (
	<div className='pt1'>
	    <video autoPlay muted loop id="background-video1">
        	<source src={dino1} type="video/mp4" />
      	</video>
	<div className="form-structor">
		<div className="signup">
			<h2 className="form-title" id="signup">Sign up</h2>
			<div className="form-holder">
				<input type="text" className="input" placeholder="Name" />
				<input type="email" className="input" placeholder="Email" />
				<input type="password" className="input" placeholder="Password" />
			</div>
			<button className="submit-btn">Sign up</button>
		</div>
	</div>
	</div>
)
}

export default SignUp