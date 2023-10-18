import React, {useState,useEffect} from 'react';
import PhoneInput from 'react-phone-input-2';
import AdminUser from './adminuser';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import axios from 'axios';
const AddUser =()=> {
  
    const [addUser,setsaddUser]=useState({
        firstname: "",
        lastname: "",
        email: "",
        gender:"",
        username: "",
        password: "",
        address:"",
        phone:"",
        Type:"",
    });
    const [message,setMessage]=useState(null)

    const url='http://127.0.0.1:8000/api/message'
    
    let content=null

    useEffect(()=>{
        axios.get(url)
        .then(response=>{
            setMessage(response.data)
        })
       
    }, [url])
    
    if(message){
        if(message[0].Message=="User Email already Exist" || message[0].Message=="User Username already Exist"  || message[0].Message== "Server Error! Try Again" || message[0].Message== "Please Login as Admin \n To add User")
        {
        console.log(message)
        content= message[0].Message 
        }
    }
    

    const handleBoxToggle = () => 
    {console.log("PHN NUMBER!!!!!!!!!!!!")
         };

         
    const inputEvent = (e)=>{
        console.log(e.target.value)
        console.log(e.target.name)
        const {value,name}=e.target;
        setsaddUser((prevalue)=> {
            return{
                ...prevalue,
                [name]: value,
            };
        });
    };
    const onSubmits=(e)=>{
        console.log("Submited")
        e.preventDefault();
        alert("form submitted");
    };
        return (
            <>
            <AdminUser/>
            <link rel="stylesheet" type="text/css"  href="css/sign-log.css"></link>
            <div >
            <div className="outer">
    
           
        <div className="inner">
            <form className="top-space" action="addUser" method = "post">
             
                <h3>Add User</h3>
                <p style={{color:"red"}}>{content}</p>
                <div className="form-group">
                    <label>First name <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    type="text" 
                    name="firstname"
                    value={addUser.firstname}
                    className="form-control" 
                    placeholder="First name" 
                    required />
                </div>

                <div className="form-group">
                    <label>Last name <span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    name="lastname"
                    value={addUser.lastname}
                    type="text" 
                    className="form-control" 
                    placeholder="Last name" 
                    required/>
                </div>

                <div className="form-group">
                    <label>username  <span className="req">*</span></label>
                    <input
                    onChange={inputEvent}
                    name="username"
                    value={addUser.username} 
                    type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    required />
                </div>

                <div className="form- group">
                    <label>Email<span className="req">*</span></label>
                    <input 
                    onChange={inputEvent}
                    name="email"
                    value={addUser.email}
                    type="email" 
                    className="form-control" 
                    placeholder="Enter email" 
                    required/>
                </div>

                <div className="form-group">
                    <label>Type<span className="req">:*</span></label>
                    <input className="form-control"
                    onChange={inputEvent}
                    type="text" 
                    name="Type"
                    value={addUser.Type} 
                    placeholder="Enter Type " />
                    
                </div>

                <div className="form-group">
                <label>Gender<span className="req">*</span></label>
                <RadioGroup row aria-label="gender" name="gender" onChange={inputEvent}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
                
                </div>


                <div className="form-group">
                    <label>Address:<span className="req">*</span></label><br/>
                    <input className="form-control"
                    onChange={inputEvent}
                    type="text" 
                    name="address"
                    value={addUser.address}
                    placeholder="Enter Address" />
                </div>


                <div className="form-group">
            
                <PhoneInput id="phn" className="form-control" name="phone"
                country={'pk'}
                onMouseDown={handleBoxToggle}
                onChange={setsaddUser.phone}
                value={addUser.phone}
                required
                />
                </div>

                <div className="form-group">
                    <label>Password</label><span className="req">:*</span>
                    <input
                    onChange={inputEvent} 
                    name="password"
                    value={addUser.password}
                    type="password" 
                    className="form-control" 
                    placeholder="Enter password" 
                    required />
                </div>

                <button onSubmit={onSubmits}  className="btn btn-custom btn-lg btn-block">Add User</button>                
            </form>
           
            </div> 
            </div> 
            </div> 
            </>
        );
    
    }
export default AddUser;