import React, { Component } from "react";
import AdminNav from './adminnav';

export class Appointment extends Component {
  render() {
    const mystyle = {
      marginTop:"10px",
      marginBottom: "10px",
      marginLeft: "10px",
      marginRight: "10px"
    };
    return (
     
      <div id="services" className="text-center">
      <div className="container">
      <div className="navbar">< AdminNav/></div>


        <div className="section-title">
              <h2 >click on buttons below </h2>
          
        </div>
        <div className="row">

        <a style={mystyle}
                    href="/appointment-form"
                    className="btn btn-custom btn-lg page-scroll"
            >
            Make Appointment
          </a>

        <a style={mystyle}
                    href="/view-appointment"
                    className="btn btn-custom btn-lg page-scroll"
            >
             View Appointment
          </a>
        
        </div>
        
      </div>
    </div>
    );
  }
}

export default Appointment;
