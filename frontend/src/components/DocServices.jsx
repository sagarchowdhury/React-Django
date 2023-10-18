import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import DoctorNav from './doctornav';


export class DocServices extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
        <div className="navbar">< DoctorNav/></div>

          <div className="section-title">
                <h2>Our Services</h2>
            <p>
            Our site provide distinct services which helps doctors and make their work easy.
            </p>
          </div>
          <div className="row">

            

            <div className="col-md-4">
            {" "}
            <i class="fa fa-user" ></i>
            <div className="service-desc">
              <h3><a href="/view-doc-app">Veiw Appointment</a></h3>
              <p>doctor can veiw the appointments.</p>
            </div> 
            </div>

            <div className="col-md-4">
            {" "}
            <i class="fa fa-search" ></i>
            <div className="service-desc">
              <h3><a href="/view-patient">Search Patient</a></h3>
              <p>Doctor can serach  the patient, veiw patient profile and also add prescription for that patient.</p>
            </div> 
            </div>

          </div>
            
          </div>
        </div>
  
    );
  }
}

export default DocServices;
