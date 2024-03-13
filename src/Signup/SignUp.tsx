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
		
	const handleSubmit = async (e:React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log("submit is enabled")
		console.log({user, email, pwd})
		const v1 = USER_REGEX.test(user);
		const v2 = PWD_REGEX.test(pwd);
		if(!v1 || !v2){
			setErrMsg("Invalid Entry");
			return;
		}
		try {
			const response = await axios.post(REGISTER_URL, JSON.stringify({user, pwd, email}), {headers: {'Content-Type': 'application/json'}, withCredentials: true});
			console.log(JSON.stringify(response))
			setSuccess(true);
			setUser("");
			setPwd("");
			setEmail("");
		} catch (error) {
			const err = error as AxiosError;
			if(err?.response)setErrMsg("No server response");
			else if(err.response?.status===409) setErrMsg("Username taken");	// this could be specified when writing the backend server
			else {setErrMsg("Registration failed")}
		}
	}

  return (
	<div className='pt1'>
	    <video autoPlay muted loop id="background-video1">
        	<source src={signvid} type="video/mp4" />
      	</video>
	<div className="form-structor">
		<div className="signup">
			<h2 className="form-title" id="signup">Sign up</h2>
			<form>
			<div className="form-holder">
				<input type="text" className="input" placeholder="Name" onChange={(e)=>{setUser(e.target.value)}} ref={userRef} autoComplete='off' onFocus={()=>{setUserFocus(true)}} onBlur={()=>{setUserFocus(false)}}/>
				<input type="email" className="input" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}} autoComplete='off' onFocus={()=>{setEmailFocus(true)}} onBlur={()=>{setEmailFocus(false)}}/>
				<input type="password" className="input" placeholder="Password" onChange={(e)=>{setPwd(e.target.value)}} autoComplete='off' onFocus={()=>{setPwdFocus(true)}} onBlur={()=>{setPwdFocus(false)}}/>
			</div>
			</form>
			<button className="submit-btn" disabled={!validName || !validEmail || !validPwd ? true: false} onClick={handleSubmit}>Sign up</button>
			<button className="submit-btn" onClick={()=>{navigate("/login")}}>Login</button>
		</div>
	</div>
	</div>
)
}

export default SignUp