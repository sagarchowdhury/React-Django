import React, { Component} from 'react'
import Header from './header';
import AdminNav from './adminnav';
import AdminUser from './adminuser';
import AdminVacation from './adminvacation';
import UpdateUser from './UpdateUser'
import SearchUser from './SearchUser';
import AddVac from './AddVac';
import AddDocVac from './AddDocVac';
import JsonData from '../data/data.json';
import AddUser from './AddUser';
import ViewUser from './ViewUser';
import DeleteUser from './DeleteUser';
import Appointment from './appointment';
import UpdateForm from './UpdateAppointment';
import CancelAppointment from './CancelAppoinment';
import ViewAppointment from './ViewAppointment';

import { Switch, Route} from "react-router-dom";

 
export class UrlAdmin extends Component {
    state = {
      landingPageData: {},
    }
    getlandingPageData() {
      this.setState({landingPageData : JsonData})
    }
  
    componentDidMount() {
      this.getlandingPageData();
    }
  
    render() {
    return (
      <div>
        <div className="navbar">< AdminNav/></div>
        <div >
        <Switch>
        <Route exact path="/home"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route exact path="/"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route exact path="/adminhome"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route exact path="/admin-user" component={AdminUser}></Route>
        <Route exact path="/appointment" component={Appointment}></Route>
        <Route exact path="/admin-vacation" component={AdminVacation}></Route>
        <Route exact path="/search-user" component={SearchUser}></Route>
        <Route exact path="/view-appointment" component={ViewAppointment}></Route>
        <Route exact path="/update-appointment" component={UpdateForm}></Route>
        <Route exact path="/cancel-appointment" component={CancelAppointment}></Route>
        <Route exact path="/update-user" component={UpdateUser}></Route>
         <Route exact path="/add-user" component={AddUser}></Route>
         <Route exact path="/delete-user" component={DeleteUser}></Route>
         <Route exact path="/view-user" component={ViewUser}></Route>
         <Route exact path="/add-vacation" component={AddVac}></Route> 
         <Route exact path="/add-doctor-vacation" component={AddDocVac}></Route>
        </Switch>
        </div>
      </div>
    )
  }
}

export default UrlAdmin;
