import React, {useState,useEffect} from 'react';
import {  Switch,Route,Link } from "react-router-dom";
import Forgetpassword from './forgetpassword';
import SignUp from "./SignUp";
import UrlAdmin from './urladmin';
import Cookies from 'js-cookie';
import axios from 'axios';
const  SignIn=()=>  {
    const [login,setlogin]=useState({
        username: "",
        password: "",
    });

    const [message,setMessage]=useState(null)

    const url='http://127.0.0.1:8000/api/message'
    
    let content=null

    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setMessage(response.data)
        })
       
    }, [url])
    

    const inputEvent = (e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const {value,name}=e.target;
        setlogin((prevalue)=> {
            return{
                ...prevalue,
                [name]: value,
            };
        });
    };
    const onSubmits=(e)=>{
        e.preventDefault();
        alert("form submitted");
    };
    
    if(message){
        if(message[0].Message=="Incorrect Username/Password"){
        console.log(message)
        content= message[0].Message }
    }
    
    return (
        <>
            <link rel="stylesheet" type="text/css"  href="css/sign-log.css"></link>
            <div >
                <div className="outer">
                    <div className="inner">
                    <form action="signin" method = "post" >
                        <h3>Sign in</h3>
                        <p style={{color:"red"}}>{content}</p>
                        <div className="form-group">
                            <label>Username or Email<span className="req">*</span></label>
                            <input 
                            onChange={inputEvent}
                            type="text" 
                            name="username"
                            value={login.username} 
                            className="form-control" 
                            required 
                            placeholder="Enter username or email" />
                        </div>
        
                        <div className="form-group">
                            <label>Password<span className="req">*</span></label>
                            <input 
                            onChange={inputEvent}
                            type="password" 
                            name="password"
                            value={login.password} 
                            className="form-control" 
                            required 
                            placeholder="Enter password" />
                        </div>
        
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                            </div>
                        </div>
        
                        <button onSubmit={onSubmits}  className="btn btn-custom btn-lg btn-block">Sign in</button>
                        
                        <p className="forgot-password text-left">
                        <a  href="/forget-password">Forgot Password?</a>
                        
                            <a style={{marginLeft:"300px"}} href="/sign-up">Don't have account?</a>
                        </p>
                    </form>
                    </div>
                    </div>
               </div>
           </>
       );

    
 }
export default SignIn;