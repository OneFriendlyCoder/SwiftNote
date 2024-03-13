import React from 'react'
import './signup.css'
import signvid from '../assets/signvid.mp4'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import axios from '../../api/axios'
import { AxiosError } from 'axios'

const SignUp = () => {

	const navigate = useNavigate();
	const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
	const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
	const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

 	const REGISTER_URL = "/signup";

	const Register = () => {
		const userRef = useRef<HTMLInputElement>(null);				// this is not valid change this
		const errRef = useRef();

		const [user, setUser] = useState<string>("");
		const [validName, setValidName] = useState<boolean>(false);
		const [userFocus, setUserFocus] = useState<boolean>(false);

		const [pwd, setPwd] = useState("");
        const [validPwd, setValidPwd] = useState<boolean>(false);
        const [pwdFocus, setPwdFocus] = useState<boolean>(false);

		const [email, setEmail] = useState<string>("");
		const [validEmail, setValidEmail] = useState<boolean>(false);
		const [emailFocus, setEmailFocus] = useState<boolean>(false);

		const [errMsg, setErrMsg] = useState("");
		const [success, setSuccess] = useState<boolean>(false);

		useEffect(()=>{							// when the component will load first it will focus on the field that userRef holds
			userRef.current?.focus();			//need to set reference to user
		},[])

		useEffect(()=>{							// this will be called whenever the user changes
			const result = USER_REGEX.test(user);
			setValidName(result);
		},[user])

		useEffect(()=>{                            // this will be called whenever the password changes
            const result = PWD_REGEX.test(pwd);
            setValidPwd(result);
        },[pwd])

		useEffect(()=>{                            // this will be called whenever the email changes
			const result = EMAIL_REGEX.test(email);
			setValidEmail(result);
		},[email])

		
	}

  return (
	<div className='pt1'>
	    <video autoPlay muted loop id="background-video1">
        	<source src={signvid} type="video/mp4" />
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
			<button className="submit-btn" onClick={()=>{navigate("/login")}}>Login</button>
		</div>
	</div>
	</div>
)
}

export default SignUp