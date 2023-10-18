import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AdminUser from './adminuser';
class SearchUser extends React.Component {
  
   state = {
     filter: "",
     data: [
       {
        firstname: "asma",
        lastname: "zahid",
        email: "a@gmail.com",
        gender:"female",
        username: "asma123",
        type:"",
       },
       {
        firstname: "naveen",
        lastname: "M",
        email: "n@gmail.com",
        gender:"female",
        username: "naveen123",
        type:"",
       }
     ]
   };
 
   handleChange = event => {
     this.setState({ filter: event.target.value });
   };
 
   render() {
     const { filter, data } = this.state;
     const lowercasedFilter = filter.toLowerCase();
     const filteredData = data.filter(item => {
       return Object.keys(item).some(key =>
         item[key].toLowerCase().includes(lowercasedFilter)
       );
     });
 
     return (
      <>
      <AdminUser/>
           <link rel="stylesheet" href="css/sign-log.css" />
          
           
       <div>
       <div className="outer">
    
      
        <div className="inner">
         <h3>Search Patient</h3>

        <div className="form-group">
          <label>Search By Username <span className="req">*</span></label>
          <input 
            onChange={this.handleChange}
            type="text" 
            name="search"
            className="form-control" 
            placeholder="Search..." 
          required />
       </div>
         {filteredData.map(item => (
           <div key={item.username}>
             <div>
               <p>
                  First Name: {item.firstname}<br/>
                  Last name: {item.lastname}<br/>
                  Gmail: {item.email}<br/>
                  Gender: {item.gender}<br/>
                  Type: {item.type}<br/>
               </p>
             </div>
           </div>
         ))}
        
         </div> 
         </div>
         </div>
       </>
     );
   }
 }

 export default SearchUser;