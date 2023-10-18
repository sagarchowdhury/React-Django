import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";


export class services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
                <h2>Our Services</h2>
            <p>
            Our site provide distinct services which helps users and make their life easy.
            </p>
          </div>
          <div className="row">
          <div className="col-md-4">
            {" "}
            <i class="fa fa-upload" ></i>
            <div className="service-desc">
              <h3><a href="/add-report">Upload Records</a></h3>
              <p>Patients can upload their medical recordsand reports here which help them kepp their all medical history save and is shown only to doctor to which patient has made appointment.</p>
            </div> 
            </div>

            
            <div className="col-md-4">
            {" "}
            <i class="fa fa-calendar" ></i>
            <div className="service-desc">
              <h3><a href="/appointment-form">Make Appointment</a></h3>
              <p>Patient make their from anywhere by just log in to site if they have internet connection and if they choosen doctor has free sots available on choosen date.</p>
            </div> 
            </div>

           

            <div className="col-md-4">
            {" "}
            <i class="fa fa-search" ></i>
            <div className="service-desc">
              <h3><a href="/homedoctors">Search Doctor</a></h3>
              <p>Patients can serach doctors acccording to their requiremets.</p>
            </div> 
            </div>

            <div className="col-md-4">
            {" "}
            <i class="fa fa-google-wallet" ></i>
            <div className="service-desc">
              <h3><a href="/payment-form">Payment</a></h3>
              <p>Users can either pay online or through cash.</p>
            </div> 
            </div>

            <div className="col-md-4">
            {" "}
            <i class="fa fa-user" ></i>
            <div className="service-desc">
              <h3><a href="/view-appointment">Veiw Appointment</a></h3>
              <p>Patient can veiw,update and cancle the appointment.</p>
            </div> 
            </div>

          </div>
            
          </div>
        </div>
  
    );
  }
}

export default services;
