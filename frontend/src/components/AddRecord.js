import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import PhoneInput from 'react-phone-input-2';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class AddRecord extends Component {
    constructor(props) {
        super(props)
        this.state = {
            prescription:"",
            prescriptionError:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handler = (event) => {
        this.setState({
            prescription: event.target.value
        })
    }
    validate=()=>{
        let prescriptionError= "";
        if(!this.state.prescription){
            [prescriptionError]="*please Write Prescription"
        }
        if(prescriptionError)
        {
            this.setState({prescriptionError});
            return false;
        }
        return true;
    }
    handleSubmit = (event) => {
        event.preventDefault()
        const IsValid=this.validate();
        if(IsValid){
            alert(`${this.state.firstName} ${this.state.lastName} Prescription added Successfully !!!!`)
            console.log(this.state);
            this.setState({
                prescription:"",
                prescriptionError:"",
            })
        }
    }
    render() {
        const errorStyle={
            color:"red"
        };
        return (
            <> 
          
           <link rel="stylesheet" href="css/sign-log.css" />
           <div >
           <div className="outer">
           <div className="inner">
            <form  className="top-space" action='addrecord' method='post'>
               <h1>Add Record</h1>
               <div className="form-group">
                <label style={{fontSize:18}}>Prescription :</label> <br />
                <textarea type="text" className="form-control"
                 value={this.state.prescription} 
                 name="pres"
                 onChange={this.handler} 
                 rows="10"
                 placeholder="Add Prescription..." />
                 <div style={errorStyle}>
                    {this.state.prescriptionError}
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

export default AddRecord;