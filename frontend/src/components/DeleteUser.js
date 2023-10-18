import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import AdminUser from './adminuser';

class DeleteUser extends Component {
    render() {
        return (
            <div>
            <link rel="stylesheet" href="css/sign-log.css" />
             <AdminUser/>
             <div className="outer">
       <div className="inner">
               <h1>User Deleted!</h1>
            </div>
            </div>
            </div>
        )     
    }
}

export default DeleteUser;