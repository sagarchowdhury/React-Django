import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class VeiwRecord extends React.Component {
  
   state = {
     filter: "",
     data: [ ]
   };
 
   handleChange = event => {
     this.setState({ filter: event.target.value });
     fetch('http://127.0.0.1:8000/api/reports')
      .then(res => res.json())
      .then(result => {
        this.setState({
          data: result
        });
      });
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
        <div> 
        <link rel="stylesheet" href="css/sign-log.css" />
        <div className="outer">
        <div className="inner">
            <h1 >
                Veiw Report
            </h1>
            <form action="SearchReport" method = "post" >
        <div className="form-group">
          <label><h3>Search By Patient Report</h3> <span className="req">*</span></label>
          <input 
            onChange={this.handleChange}
            type="text" 
            name="search"
            className="form-control" 
            placeholder="Search..." 
          required />
       </div>
       </form>
         {filteredData.map(item => (
           <div key={item.reportname}>
             <div>
               <p>
             
               </p>
             </div>
           </div>
         ))}
         </div>
        </div>
        </div>
     );
   }
 }

 export default VeiwRecord