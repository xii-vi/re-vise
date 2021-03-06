import axios from "axios";
import "../login/login.css"
import { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { loginReducer } from "../../reducer/authReducer";

export const Login = () => {
  const navigate = useNavigate();
  const {authDispatch}= useAuth();
  const [{email,password},loginDispatch] = useReducer(loginReducer, {email:"", password:""});
  const testHandler=()=>[
    loginDispatch({type:"SET_EMAIL",payload:"adarshbalika@gmail.com"}),
    loginDispatch({type:"SET_PASSWORD",payload:"adarshBalika123"})
  ]
  const submitHandler= async (e, email, password)=>{
  e.preventDefault();
  try{
  const loginResponse = await axios.post("api/auth/login", {email,password});
  console.log(loginResponse.data);
  localStorage.setItem("encodedToken", loginResponse.data.encodedToken)
  localStorage.setItem('userData', JSON.stringify(loginResponse.data.foundUser));
  authDispatch({ type: "USER_LOGIN" })
  authDispatch({ type: "USER_TOKEN", payload: loginResponse.data.encodedToken })
  authDispatch({ type: "USER_DATA", payload: loginResponse.data.foundUser })
  navigate("/notes")
  }catch(err){
    console.log(err);
  }
  }
    return(
        
    <div className="login homepage-container">
        <div>
        <img src="/asset/login.svg" alt="homepage-svg"/>
        </div>
    <div className="container-authentication-login py-5">
        <form className="p-5 center-flex login-form" onSubmit={(e)=> submitHandler(e, email,password)}>
            <p className="h5">Let'revise those NOTES!!!</p>
            <div className="my-5 ">
                <div className="py-5 flex flex-direction-col">
                    <small className="py-2">E-mail</small>
                    <input className="p-2" type="email" placeholder="heat@gotyou.com" value={email} required onChange={(e)=> loginDispatch({type:"SET_EMAIL",payload:e.target.value})}/>
                </div>
                <div className="pb-5 flex flex-direction-col">
                    <small className="pb-2">Password</small>
                    <input className="p-2" type="password" placeholder="password" value={password} required onChange={(e)=> loginDispatch({type:"SET_PASSWORD",payload:e.target.value})}/>
                </div>
                <div className="py-2">
                    <p>Forgot Password ?</p>
                </div>
                <div className="py-3">
                    <button className="btn btn-outline-primary login-btn">Login</button>
                    <button className="btn btn-outline-primary login-btn" onClick={testHandler}>Test</button>
                </div>
                <Link to="/signup">
                <p className="pb-2">New here ? <p className="text-bold">Register Now</p></p>
                </Link>
            </div>
        </form>
    </div>
    </div>  
    )
}