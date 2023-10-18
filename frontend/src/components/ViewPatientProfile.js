import React, { useEffect,useState } from 'react';
import axios from 'axios';

function PatientProfile(props) {
        const ID =localStorage.getItem('id')
        console.log(ID)
        const [Data,setData]=useState(null)

        const url='http://127.0.0.1:8000/api/patient'

        let Name=null
        let email=null
        let ContactNo=null
        let address=null
    
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
        if(Data[i].id==ID){

            Name=Data[i].FirstName +" "+ Data[i].LastName
            email=Data[i].Email
            ContactNo=Data[i].ContactNO
            address=Data[i].Address
            console.log(Name)

            list.push(Data[i])
            console.log(list)
          }
      }
    }
    console.log(list)

        return (
            <> 
        
           <link rel="stylesheet" href="css/sign-log.css" />
           <div className="outer">
            <div className="inner">
              
           <div >
            <h2>Profile</h2>
            <div className="form-group">
            <table style={{backgroundColor:'white',borderRadius:8}}>
                <tr className="form-control">
                    <td>Name:</td>
                    <td>{Name}
                    </td>
                </tr>
                <div style={{paddingTop:20}}></div>
                <tr className="form-control">
              
                    <td>Gmail:</td>
                    <td>{email}</td>
                </tr>
                <div style={{paddingTop:20}}></div>
                <tr className="form-control">
                    <td>Contact Number:</td>
                    <td>{ContactNo}</td>
                </tr>
                <div style={{paddingTop:20}}></div>
                <tr className="form-control">
                    <td>Address:</td>
                    <td>{address}</td>
                </tr>
                <div style={{paddingTop:20}}></div>
                <tr><a href='/add-record'>
                <button className="btn btn-custom btn-lg btn-block">Add Prescription</button>
                </a>
                </tr>

            </table>
            </div>
            </div>
            </div>
           </div>
           </>
        );
};

export default PatientProfile;