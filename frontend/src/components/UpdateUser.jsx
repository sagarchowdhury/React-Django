import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import AdminUser from './adminuser';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
class UpdateUser extends Component {
    constructor(props) {
        super(props)
        const initialState={
            firstName: "",
            lastName: "",
            gender: "",
            email:"",
            password:"",
            Type:"",
            firstNameError: "",
            lastNameError: "",
            genderError: "",
            emailError:"",
            passwordError:"",
            TypeError:"",
        }
        this.state = initialState;
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    typehandler = (event) => {
        this.setState({
            Type: event.target.value
        })
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    validate=()=>{  
        let firstNameError="";
        let lastNameError="";
        let TypeError="";
        let passwordError="";
        let genderError="";
        let emailError="";
        if (!this.state.firstName){
            firstNameError="*please enter First Name";
        }
        if (!this.state.lastName){
            lastNameError="*please enter Last Name";
        }
        if (!this.state.Type){
            TypeError ="*please enter Type of User";
        }
        if (!this.state.password){
            passwordError="*please enter Password";
        }
        if (!this.state.email){
            emailError="*please enter Email Address";
        }
        if(firstNameError||lastNameError||TypeError||passwordError||emailError){
            this.setState({firstNameError,lastNameError,TypeError,passwordError,emailError});  
            return false
        }
        return true;
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const isValid=this.validate();
        if(isValid){
            alert(`${this.state.firstName} ${this.state.lastName} Added as ${this.state.gender} !!!!`)
            console.log(this.state);
            this.setState({
                firstName: "",
                lastName: "",
                gender: "",
                email:"",
                password:"",
                Type:"",
                firstNameError: "",
                lastNameError: "",
                genderError: "",
                emailError:"",
                passwordError:"",
                TypeError:"",
            });
        } 
    }
    render() {
        const errorStyle={
            color:"red"
        };
        return (
           <> 
           <AdminUser/>
           <link rel="stylesheet" href="css/sign-log.css" />
           <div>{/* <div style={{backgroundColor:'gray', paddingTop:200}}> */}
           <div className="outer">
    
      
        <div className="inner">
               <form onSubmit={this.handleSubmit} className="top-space">
                   <h3>Update User</h3>
                    <div className="form-group">
                    <label>First Name<span>:</span></label><br/>
                    <input className="form-control"
                    onChange={this.firsthandler}
                    type="text" 
                    name="firstName"
                    value={this.state.firstName} 
                    placeholder="Enter First Name" />
                    <div style={errorStyle}>
                        {this.state.firstNameError}
                    </div>
                </div>
                <div className="form-group">
                    <label>Last Name<span className="req">:</span></label><br/>
                    <input className="form-control"
                    onChange={this.lasthandler}
                    type="text" 
                    name="lasName"
                    value={this.state.lastName} 
                    placeholder="Enter Last Name" />
                    <div style={errorStyle}>
                        {this.state.lastNameError}
                    </div>
                </div>
                <div className="form-group">
                    <label>Type<span className="req">:</span></label><br/>
                    <input className="form-control"
                    onChange={this.typehandler}
                    type="text" 
                    name="userName"
                    value={this.state.Type} 
                    placeholder="Enter Type " />
                    <div style={errorStyle}>
                        {this.state.TypeError}
                    </div>
                </div>
                <div className="form-group">
                    <label>Gender<span className="req">:</span></label><br/>
                    <RadioGroup row aria-label="gender" name="gender" onChange={this.genderhandler} className="form-control">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </div>
                <div className="form-group">
                    <label>Email<span className="req">:</span></label><br/>
                    <input className="form-control"
                    onChange={this.emailhandler}
                    type="text" 
                    name="email"
                    value={this.state.email} 
                    placeholder="Enter Email" 
                    pattern=".+@gmail.com" 
                    title=" e.g username@gmail.com"/>
                    <div style={errorStyle}>
                        {this.state.emailError}
                    </div>
                </div>
                <div className="form-group">
                    <label>Password<span className="req">:</span></label><br/>
                    <input className="form-control"
                    onChange={this.passwordhandler}
                    type="password" 
                    name="password"
                    value={this.state.password}
                    placeholder="Enter password" />
                    <div style={errorStyle}>
                        {this.state.passwordError}
                    </div>
                </div>
                <input  className="btn btn-custom btn-lg btn-block" type="submit" value="Submit" />             
            </form>
        </div>  
        </div>
        </div> 
        </>         
        )     
    }
}

export default UpdateUser