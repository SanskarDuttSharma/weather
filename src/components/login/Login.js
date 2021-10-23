import React from "react";
import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { MDBInput } from "mdbreact";
import firebase from "../../firebase";
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import {FcGoogle} from 'react-icons/fc';
import {BsFacebook} from 'react-icons/bs';
import {FaUserAlt} from 'react-icons/fa'
import './login.css'
const Login = (props) => {
  const {
    email,
    password,
    setPassword,
    setEmail,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props;
  
  const SignInWithFirebase=()=>{
    // const auth = getAuth();
    // getRedirectResult(auth)
    //   .then((result) => {
    //    console.log()
    // }).catch((error) => {
    // });
  }


  return (
    <div className="main-login">
        <div className="login-left">
        </div>
        <div className="login-right">
        <center><FaUserAlt size="15%"  style={{ marginRight: '1rem' ,color:'#242121',paddingBottom:'17px'}} /></center>
        <div className="email">
           <MdEmail  size="10%" style={{ marginRight: '1rem' ,color:'white' }}  /> 
            <MDBInput size="lg" validate type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <p>{emailError}</p>
        </div>
        <div className="pass">
            <RiLockPasswordFill  size="10%" style={{ marginRight: '1rem',color:"white" }}/>
            <MDBInput  size="lg" validate type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />   
            <p>{passwordError}</p>        
        </div> 

         {hasAccount ? (
             <div>
             <center>
             <button  className="btn btn-primary btn-rounded" onClick={handleLogin}> Sign-in</button>
                     <p><br/>Create an account? <span onClick={()=>setHasAccount(!hasAccount)}>
                 sign-up
             </span></p>
             </center>
             </div>
           
         ) :
         (<div>
         <center>
             <button  className="btn btn-primary btn-rounded" onClick={handleSignup} >Sign-up</button>
                     <p><br/>Already have an account? <span onClick={()=>setHasAccount(!hasAccount)}>
                 sign-in
             </span></p></center>
             </div>)
         }
       <center>
        <div>
        <br/>
        <span onClick={SignInWithFirebase}><FcGoogle size="10%" style={{ marginRight: '5rem' }}/> </span>
        <BsFacebook size="10%" style={{ marginRight: '2rem',color:'white' }} /> 
        </div>
        </center>
        </div>
        </div>
    )
};

export default Login;
