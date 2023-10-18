import React, { useEffect,useState } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Card,{Sdata} from "./SearchPatientCard";

function SearchPatient(){
  const [Data,setData]=useState(null)

    const url='http://127.0.0.1:8000/api/patient'
    
    let content=null
    let list = []
    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setData(response.data)
        })
       
    }, [url])
    if(Data){
      for(let i=0; i<Data.length;i++)
      {
        list.push(Data[i])
      }
  }

    
    return(
        <>
        
        <h1 className="heading_style">Patient list</h1>

        {list.map((item,index) =>{
          return(
            <Card
                 firstname={item.FirstName +" "+ item.LastName}
                  email={item.Email}
                  gender={(item.Gender)}
                  username={item.Username}
                  ContactNo={item.ContactNO}
                  address={item.Address}
                  id={item.id}
            />
          );
        })}
      </>
    );
  };

export default SearchPatient;
 