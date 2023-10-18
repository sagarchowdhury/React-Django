import React, {useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AdminVacation from "./adminvacation";
import axios from 'axios';
const AddVac =()=> {
  
    const [vacation,setvacation]=useState({
        hname: "",
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

    if(message){
        if(message[0].Message=="Doctor Name is InCorrect" || message[0].Message=="Please Login as Admin \n To add Vacation" || message[0].Message=="Server Error")
        {
        console.log(message)
        content= message[0].Message 
        }
    }
    
    const inputEvent = (e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const {value,name}=e.target;
        setvacation((prevalue)=> {
            return{
                ...prevalue,
                [name]: value,
            };
        });
    };
    
    const onSubmits=(e)=>{
        e.preventDefault();
        alert("vacations added");
    };
        return (
            <>
               <AdminVacation/>
                <link rel="stylesheet" href="css/sign-log.css" />
            <div>
            <div className="outer">
    
      
        <div className="inner">
            <form className="top-space" action='addVacations' method='post'>
                <h3>Add Vacations</h3>
                <p style={{color:"red"}}>{content}</p>
                <div className="form-group">
                    <label>Holiday name <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    type="text" 
                    name="hname"
                    value={vacation.hname}
                    className="form-control" 
                    placeholder="Holiday Title" 
                    required />
                </div>

                <div className="form-group">
                    <label>Start date <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    name="start"
                    type="date" 
                    className="form-control" 
                    placeholder="start date" 
                    required/>
                </div>

                <div className="form-group">
                    <label>End date  <span className="req">*</span></label>
                    <input
                    onChange={inputEvent}
                    name="end"
                    //value={vacation.endDate} 
                    type="date" 
                    className="form-control" 
                    placeholder="end date" 
                    required />
                </div>

                <button onSubmit={onSubmits}  className="btn btn-custom btn-lg btn-block">Add Holiday</button>
                
            </form>
            </div>
            </div>
            </div>
            </>
        );
    }
export default AddVac;