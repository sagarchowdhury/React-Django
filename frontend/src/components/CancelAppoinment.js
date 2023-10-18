import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import Appointment from './appointment';
class CancelAppointment extends Component {
    render() {
        return (
            <div>
            <Appointment/>
            <link rel="stylesheet" href="css/sign-log.css" />
            <div className="outer">
       <div className="inner">
               <h1>Appointment Cancelled</h1>
            </div>
            </div>
            </div>
        );     
    }
}

export default CancelAppointment;