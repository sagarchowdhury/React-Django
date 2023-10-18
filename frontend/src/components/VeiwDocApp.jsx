import React, {useState,useEffect} from 'react';
import ReactDOM from 'react-dom';

import ReceptionistNav from './receptionistnav';
import axios from 'axios';
import App from '../App';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card,{Sdata} from "./DocAppCard";


function ViewDocApp(){
  const [Data,setData]=useState(null)

    const url='http://127.0.0.1:8000/api/appointments'
    
    let content=null
    let list = []
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data)
        })
       
    }, [url])
    if(Data){
      console.log(Data.length)
      for(let i=0; i<Data.length;i++)
      {
        list.push(Data[i])
        console.log(Data[i])
      }
      content= Data[0].FirstName  
      console.log(list)
      console.log("Sdata.........")
      console.log(Sdata)
  }

    
    return(
        <>
         <div className="navbar">< ReceptionistNav/></div>

        <h1 className="heading_style">Appointment list</h1>

        {list.map((item,index) =>{
          return(
            <Card
                  DoctorName={item.DoctorUsername}
                  DoctorGmail={item.DoctorGmail}
                  PatientName={(item.PatientUsername)}
                  PatientGmail={item.PatientGmail}
                  PatientContactNo={item.PatientContactNO}
                  date={item.Date}
                  STime={item.SlotID}
                  link={item.link}
            />
          );
        })}
      </>
    );
  };

 export default ViewDocApp;