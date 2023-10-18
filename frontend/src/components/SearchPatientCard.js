import React from 'react';
import {Link} from 'react-router-dom'
import Profile from './ViewPatientProfile'

const Sdata=[
    {
        firstname: "",
        lastname: "",
        email: "",
        gender:"",
        username: "",
       }]

function PatientCard(props){
    const handleClick=(e)=>{
        console.log(e.id);
        console.log(e)
        localStorage.setItem('id', e.id);
    };
    return(
    <>
    <link rel="stylesheet" href="css/CardStyle.css" />
        <div className="cards">
            <div className="card">
                <div>
                
                    <span className="card_info">{props.firstname}</span>
                   <div><span className="card_info">{props.email}</span></div> 
                    <div><span className="card_info">{props.gender}</span></div>
                    <span className="card_info">{props.username}</span></div>
                    <a href='/view-profile' target="_blank">
                    <button onClick={handleClick.bind(this,props)} className=".btn-default">View Profile</button>
                    </a>
                    {/*  */}
                </div>
            </div>
    </>
    );
  };

  export default PatientCard;
  export {Sdata};