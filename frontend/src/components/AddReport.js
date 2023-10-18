import axios from 'axios'; 

import React,{Component} from 'react'; 

class AddReport extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            fileName:"",
            selectedFile: null,
            fileNameError:"",
            selectedFileError:"",
            message:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    
    firsthandler = (event) => {
        this.setState({
            fileName: event.target.value
        })
    }
	
	// On file select (from the pop up) 
	onFileChange = event => { 
	
	// Update the state 
	this.setState({ selectedFile: event.target.files[0] }); 
	
	}; 
	validate=()=>{
        let fileNameError="";
        let selectedFileError= null
        if(!this.state.fileName){
            fileNameError="*please Enter Test Name"
        }
        if(!this.state.selectedFile){
            selectedFileError="*Upload File"
        }
        if(fileNameError||selectedFileError)
        {
            this.setState({fileNameError,selectedFileError});
            return false;
        }
        return true;
    }
    
	handleSubmit = (event) => {
        event.preventDefault()
        const IsValid=this.validate();
        if(IsValid){
            alert(`${this.state.fileName} report added Successfully !!!!`)
            console.log(this.state);
            this.setState({
                fileName:"",
                selectedFile: null,
                fileNameError:"",
                selectedFileError:"",
            })
        }
    }
	render() { 
        const errorStyle={
            color:"red"
        };	
	return ( 
		<div> 
        <link rel="stylesheet" href="css/sign-log.css" />
        <div className="outer">
        <div className="inner">
        <form  className="top-space" action='addreport' method='post'>
            <h1>
                Upload Report
            </h1>
            <div>
                <label style={{fontSize:14}}>Test Name: </label>
                <input type="text" className="form-control"
                name="fileName"
                value={this.state.fileName} 
                onChange={this.firsthandler} 
                placeholder="Report Name..." required/>
                <div style={errorStyle}>
                    {this.state.fileNameError}
                 </div>        
            </div>
            <div>
            <label style={{fontSize:14}}>Upload File : </label>
            <input type="file" onChange={this.onFileChange} name="file"
            accept=".pdf" className="form-control" required/> 
            <div style={errorStyle}>
                    {this.state.selectedFileError}
                 </div> 
            </div>
            <div style={{paddingTop:40,paddingLeft:'auto'}}>
            <input onSubmit={this.handleSubmit} className="btn btn-custom btn-lg btn-block" type="submit" value="Submit" />
            {/* <button onClick={this.onFileUpload}> 
				Upload! 
				</button>  */}
            </div>
        </form>
        </div>
        </div>
        </div>
	); 
	} 
} 

export default AddReport; 
