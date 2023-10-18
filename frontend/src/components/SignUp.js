import React, {useState,useEffect} from 'react';
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';

const SignUp =()=> {
  
    const [signup,setsignup]=useState({
        firstname: "",
        lastname: "",
        email: "",
        gender:"",
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
        setsignup((prevalue)=> {
            return{
                ...prevalue,
                [name]: value,
            };
        });
    };

    if(message){
        if(message[0].Message=="User Email already Exist" || message[0].Message=="User Username already Exist")
        {
        console.log(message)
        content= message[0].Message 
        }
    }
    
    const onSubmits=(e)=>{
        console.log("Submited")
        e.preventDefault();
        alert("form submitted");
    };
        return (
            <>
            
            <link rel="stylesheet" type="text/css"  href="css/sign-log.css"></link>
            <div >
            <div className="outer">
    
           
        <div className="inner">
            <form className="top-space" action="signup" method = "post">
             
                <h3>Register</h3>
                <p style={{color:"red"}}>{content}</p>
                <div className="form-group">
                    <label>First name <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    type="text" 
                    name="firstname"
                    value={signup.firstname}
                    className="form-control" 
                    placeholder="First name" 
                    required />
                </div>

                <div className="form-group">
                    <label>Last name <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    name="lastname"
                    value={signup.lastname}
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" 
                    required/>
                </div>

                <div className="form-group">
                    <label>username  <span className="req">*</span></label>
                    <input
                    onChange={inputEvent}
                    name="username"
                    value={signup.username} 
                    type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    required />
                </div>

                <div className="form- group">
                    <label>Email<span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    name="email"
                    value={signup.email}
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    required/>
                </div>

                <div className="form-group">
                <label>Gender<span className="req">*</span></label>
                <RadioGroup row aria-label="gender" name="gender" onChange={inputEvent}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                
                </div>

                <div className="form-group">
                    <label>Password</label><span className="req">*</span>
                    <input
                    onChange={inputEvent} 
                    name="password"
                    value={signup.password}
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" 
                    required />
                </div>

                <button onSubmit={onSubmits}  className="btn btn-custom btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                Already registered?
                <a href="/sign-in">SignIn
                </a>
                </p>
                
            </form>
           
            </div> 
            </div> 
            </div> 
            </>
        );
    
    }
export default SignUp;