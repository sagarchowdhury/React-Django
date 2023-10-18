import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import axios from 'axios';
import Appointment from './appointment';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CancelAppointment from "./CancelAppoinment"
import Card,{Sdata} from "./AppoinmtmentCard";


function ViewAppointment(){
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
         <Appointment/>
         <link rel="stylesheet" href="css/sign-log.css" />
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
                  id={item.id}
                  link={item.link}
            />
          );
        })}
      </>
    );
  };
 export default ViewAppointment;


