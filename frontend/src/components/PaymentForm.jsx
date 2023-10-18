import React, {useState, Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReceptionistNav from './receptionistnav';


const PaymentForm =()=> {

    const [payment,setpayment]=useState({
        name: "",
        number: "",
        cvv: "",
        date:"",
    });
    const inputEvent = (e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const {value,name}=e.target;
        setpayment((prevalue)=> {
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
             <div className="navbar">< ReceptionistNav/></div>

                <link rel="stylesheet" href="css/sign-log.css" />
            <div>
            <div className="outer">
    
      
    <div className="inner">
            <form className="top-space" action='onlinepayment' method='post'>
                <h3>Payment Method</h3>
                <div className="form-group">
                    <label>Name <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    type="text" 
                    name="name"
                    value={payment.name}
                    className="form-control" 
                    placeholder="Card holder's name" 
                    required />
                </div>

                <div className="form-group">
                    <label>Card Number <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    name="number"
                    value={payment.number}
                    type="text" 
                    className="form-control" 
                    placeholder="Card number" 
                    required/>
                </div>

                <div className="form-group">
                    <label>CVC Number</label><span className="req">*</span>
                    <input
                    onChange={inputEvent} 
                    name="cvv"
                    value={payment.cvv}
                    type="password" 
                    className="form-control" 
                    placeholder="CVC" 
                    required />
                </div>

                <div className="form-group">
                    <label>Date  <span className="req">*</span></label>
                    <input
                    onChange={inputEvent}
                    name="date"
                    value={payment.date} 
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
export default PaymentForm;