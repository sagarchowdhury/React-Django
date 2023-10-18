import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PhoneInput from 'react-phone-input-2';
import Appointment from './appointment';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class AppointmentForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            patientusername: "",
            doctorusername: "",
            doctorgmail: "",
            patientgmail:"",
            phnNum:"",
            pMethod:"",
            slot:"",
            date:"",
            message:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    async componentDidMount() {
        const url = "http://127.0.0.1:8000/api/message";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ message: data[0].Message });
        console.log(this.state.message)

        if(this.state.message!="Doctor UserName is Incorrect \nCould not register Appointment" && this.state.message!="Patient UserName is Incorrect \nCould not register Appointment" && this.state.message!="Server Error" && this.state.message!="Please Login as Patient or Admin")
        {
            this.setState({ message: "" });
        }
    }
    patientusername = (event) => {
        this.setState({
            patientusername: event.target.value
        })
    }
    doctorusername = (event) => {
        this.setState({
            doctorusername: event.target.value
        })
    }
    doctorgmail = (event) => {
        this.setState({
            doctorgmail: event.target.value
        })
    }
    patientgmail = (event) => {
        this.setState({
            patientgmail: event.target.value
        })
    }
    methodHandler=(event)=>{
        this.setState({
            pMethod:event.target.value
        })
    }
    slotHandler=(event)=>{
        this.setState({
            slot:event.target.value
        })
    }
    dateHandler=(event)=>{
        this.setState({
            date:event.target.value
        })
    }
    validate=()=>{

        let firstNameError= "";
        let lastNameError= "";
        let doctorError= "";
        let gmailError="";
        let phnNumError="";
        let pMethodError="";
        if(!this.state.firstName){
            firstNameError="*please Enter First Name"
        }
        if(!this.state.lastName){
            lastNameError="*please Enter Last Name"
        }
        if(!this.state.gmail){
            gmailError="*please Enter Email"
        }
        if(!this.state.phnNum){
            phnNumError="*please Enter Phone Number"
        }
        else if(this.state.phnNum.slice(2,3)!='3')
        {
            phnNumError="*Invalid Phone Number"
        }
        else if((this.state.phnNum.slice(3,4)!='1') && (this.state.phnNum.slice(3,4)!='2') && (this.state.phnNum.slice(3,4)!='3') && (this.state.phnNum.slice(3,4)!='4') && (this.state.phnNum.slice(3,4)!='0'))
        {
            phnNumError="*Invalid Phone Number"
        }
        else if (this.state.phnNum.length<10)
        {
            phnNumError="*Invalid Phone Number"   
        }
        if(!this.state.pMethod){
            pMethodError="*please select Payment Method"
        }
        if(firstNameError||lastNameError||gmailError||phnNumError||pMethodError)
        {
            this.setState({firstNameError,lastNameError,gmailError,phnNumError,pMethodError});
            return false;
        }
        return true;
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const IsValid=this.validate();
        if(IsValid){
            alert(`${this.state.firstName} ${this.state.lastName} Appoinment made Successfully !!!!`)
            console.log(this.state);
            this.setState({
                patientusername: "",
                doctorusername: "",
                doctorgmail: "",
                patientgmail:"",
                phnNum:"",
                pMethod:"",
            })
        }
    }
    render() {
        const errorStyle={
            color:"red"
        };
        const pat={
            float:'left'
        };
        return (
            <> 
            
            <Appointment/>
           <link rel="stylesheet" href="css/sign-log.css" />
           <div >
           <div className="outer">
    
    <div className="inner">
            <form  className="top-space" action="makeappointment" method = "post">
               <h1>Make Appointment</h1>
               <p style={{color:"red"}}>{this.state.message}</p>
               <div className="form-group">
                <label>Patient Username :</label> <br />
                <input type="text" className="form-control"
                 value={this.state.firstName} 
                 onChange={this.patientusername} 
                 name="patientusername"
                 placeholder="Patient Username..." required/>
                 <div style={errorStyle}>
                    {this.state.firstNameError}
                 </div>
                </div>

                <div className="form-group">
                <label>Doctor Username :</label> <br />
                <input type="text" className="form-control"
                value={this.state.lastName} 
                onChange={this.doctorusername} 
                name="doctorusername"
                placeholder="Doctor Username..." required/>
                <div style={errorStyle}>
                    {this.state.lastNameError}
                 </div>        
                </div>

                <div className="form-group">
                <label>Doctor Gmail: </label><br />
                <input type="text" className="form-control"
                value={this.state.gmail} 
                onChange={this.gmailhandler} 
                name="doctorgmail"
                placeholder="Doctor Gmail..."  
                pattern=".+@gmail.com" 
                title=" e.g username@gmail.com" required/>
                <div style={errorStyle}>
                    {this.state.gmailError}
                 </div>
                </div>

                <div className="form-group">
                <label>Patient Gmail: </label><br />
                <input type="text" className="form-control"
                value={this.state.gmail} 
                onChange={this.pgmailhandler} 
                name="patientgmail"
                placeholder="Patient Gmail..."  
                pattern=".+@gmail.com" 
                title=" e.g username@gmail.com" required/>
                <div style={errorStyle}>
                    {this.state.gmailError}
                 </div>
                </div>

                <div className="form-group">
                <div style={pat}>Patient </div>
                <PhoneInput id="phn" className="form-control"
                country={'pk'}
                name="patientphn"
                value={this.state.phnNum}
                onChange={phnNum => this.setState({ phnNum })} required/>
                <div style={errorStyle}>
                    {this.state.phnNumError}
                 </div>
                </div>
                        
                <div className="form-group">
                    <label>Date  <span className="req">*</span></label><br/>
                    <input
                    onChange={this.dateHandler}
                    name="date"
                    value={this.state.date} 
                    type="date" 
                    className="form-control" 
                    required />
                </div>

                <div className="form-group">
                <label>Slot: </label><br />
                <RadioGroup row aria-label="slot" name="slot" onChange={this.slotHandler} required>
                <FormControlLabel value="8am - 10am" control={<Radio />} label="8am - 10am" />
                <FormControlLabel value="11am - 1pm" control={<Radio />} label="11am - 1pm" /><br/>
                <FormControlLabel value="2pm - 3pm" control={<Radio />} label="2pm - 3pm" />
                {/*<FormControlLabel value="6pm - 8pm" control={<Radio />} label="6pm - 8pm" /> */}
                </RadioGroup>
                <div style={errorStyle}>
                    {this.state.pMethodError}
                 </div>       
                </div>  

                <div className="form-group">
                <label>Payment Method: </label><br />
                <RadioGroup row aria-label="pMethod" name="pMethod" onChange={this.methodHandler} required>
                <FormControlLabel value="online" control={<Radio />} label="online" /><br/>
                <FormControlLabel value="cash" control={<Radio />} label="cash" />
                </RadioGroup>
                <div style={errorStyle}>
                    {this.state.pMethodError}
                 </div>       
                </div>    
                <input onSubmit={this.handleSubmit} className="btn btn-custom btn-lg btn-block" type="submit" value="Submit" />
            </form>
           </div>
           </div>
            </div>
           </>
        )     
    }
}

export default AppointmentForm