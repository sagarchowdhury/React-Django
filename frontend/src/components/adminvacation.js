import React, { Component } from "react";
import AdminNav from './adminnav';

export class AdminVacation extends Component {
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
                    href="/add-vacation"
                    className="btn btn-custom btn-lg page-scroll"
            >
             Add whole clinic vacation
          </a>
          <a style={mystyle}
                    href="/add-doctor-vacation"
                    className="btn btn-custom btn-lg page-scroll"
            >
             Add Doctor Vacation
          </a>
         
        </div>
        
      </div>
    </div>
    );
  }
}

export default AdminVacation;
