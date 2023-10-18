import React, {useState, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const RecepPay =()=> {

    const [recepPay,setrecep]=useState({
        patientname: "",
        doctorname: "",
        amount:"",
        date:"",
    });
    const inputEvent = (e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const {value,name}=e.target;
        setrecep((prevalue)=> {
            return{
                ...prevalue,
                [name]: value,
            };
        });
    };
    const onSubmits=(e)=>{
        e.preventDefault();
        alert("payment done");
    };
        return (
            <>
               
                <link rel="stylesheet" href="css/sign-log.css" />
            <div>
            <div className="outer">
               < div className="inner">
               
            <form className="top-space">
                <h3>Make Payment</h3>
                <div className="form-group">
                    <label>Patient Name <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    type="text" 
                    name="patientname"
                    value={recepPay.patientname}
                    className="form-control" 
                    placeholder="patientname" 
                    required />
                </div>

                <div className="form-group">
                    <label>Doctor Name <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    name="doctorname"
                    value={recepPay.doctorname}
                    type="text" 
                    className="form-control" 
                    placeholder="doctorname" 
                    required/>
                </div>

                <div className="form-group">
                    <label>Amount</label><span className="req">*</span>
                    <input
                    onChange={inputEvent} 
                    name="amount"
                    value={recepPay.amount}
                    type="text" 
                    className="form-control" 
                    placeholder="amount" 
                    required />
                </div>

                <div className="form-group">
                    <label>Date  <span className="req">*</span></label>
                    <input
                    onChange={inputEvent}
                    name="date"
                    value={recepPay.date} 
                    type="date" 
                    className="form-control" 
                    required />
                </div>

                <button onSubmit={onSubmits}  className="btn btn-custom btn-lg btn-block">Make Payment</button>
            </form>
            </div>
            </div>
            </div>
            </>
        );
    }
export default RecepPay;