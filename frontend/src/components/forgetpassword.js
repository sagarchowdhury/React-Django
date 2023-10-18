import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import App from '../App';
const Forgetpassword=()=>  {
    
    const [newlogin,setnewlogin]=useState({
        email: "",
        password: "",
    });
    const inputEvent = (e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const {value,name}=e.target;
        setnewlogin((prevalue)=> {
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
        return (
            <>
            <link rel="stylesheet" type="text/css"  href="css/sign-log.css"></link>
            <div id="forget-password">
            <div className="outer">
    
      
        <div className="inner">
            <form className="top-space" action='resetPassword' method='post'>

                <h3>Reset Password</h3>
                <p>To change password, enter email on which account is made and new password </p>

                <div className="form-group">
                    <label>Email<span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    type="text" 
                    name="email"
                    value={newlogin.email} 
                    className="form-control" 
                    required 
                    placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password<span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    type="password" 
                    name="password"
                    value={newlogin.password} 
                    className="form-control" 
                    required 
                    placeholder="Enter password" />
                </div>


                <button onSubmit={onSubmits}  className="btn btn-custom btn-lg btn-block">Reset Password</button>
                
            </form>
           
            </div>
            </div>
            </div>
            </>
        );
    }
export default Forgetpassword;