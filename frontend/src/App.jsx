import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import About from './components/about';
import Services from './components/services';
import Doctors from './components/Doctors';
import Contact from './components/contact';
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Forgetpassword from "./components/forgetpassword";
import JsonData from './data/data.json';
import AppointmentForm from "./components/AppointmentForm";
import UpdateForm from './components/UpdateAppointment';
import CancelAppointment from './components/CancelAppoinment';
import ViewAppointment from './components/ViewAppointment';
import PaymentForm from "./components/PaymentForm";
import AddReport from "./components/AddReport";
import ViewUser from './components/ViewUser';
import AddUser from './components/AddUser';

import UrlAdmin from './components/urladmin';
import AdminUser from './components/adminuser';
import AdminVacation from './components/adminvacation';
import UpdateUser from './components/UpdateUser'
import SearchUser from './components/SearchUser';
import AddVac from './components/AddVac';
import AddDocVac from './components/AddDocVac';
import DeleteUser from './components/DeleteUser';
import Appointment from './components/appointment';

import ViewPatient from './components/ViewPatient';
import UrlDoctor from './components/urldoctor';
import DocServices from './components/DocServices';
import AddRecord from './components/AddRecord';
import SearchPatient from './components/SearchPatient';
import ViewDocApp from "./components/VeiwDocApp";
import VeiwRecord from "./components/VeiwRecord";
import PatientProfile from './components/ViewPatientProfile';

import UrlReceptionist from './components/urlreceptionist'

import { Switch, Route } from "react-router-dom";

export class App extends Component {
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

        <div className="navbar"><Navigation /></div>
        <div >
        <Switch>
        <Route exact path="/"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route path="/home" exact render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route path="/about" exact render={()=><About data={this.state.landingPageData.About} />}/>
        <Route path="/services" exact render={()=><Services data={this.state.landingPageData.Services} />}/>
        <Route path="/contact" exact render={()=><Contact data={this.state.landingPageData.Contact} />}/>
        <Route exact path="/homedoctors" component={Doctors}></Route>
        <Route exact path="/sign-in" component={SignIn}></Route>
        <Route exact path="/sign-up" component={SignUp}></Route>
        <Route exact path="/forget-password" component={Forgetpassword}></Route>
        <Route exact path="/appointment-form" component={AppointmentForm}></Route>
        <Route exact path="/cancel-appointment" component={CancelAppointment}></Route>
        <Route exact path="/payment-form" component={PaymentForm}></Route>
        <Route exact path="/payment" component={PaymentForm}></Route>
        <Route exact path="/add-report" component={AddReport}></Route>


        <Route exact path="/adminhome" component={UrlAdmin}></Route>
        <Route exact path="/appointment" component={Appointment}></Route>
        <Route exact path="/admin-user" component={AdminUser}></Route>
        <Route exact path="/admin-vacation" component={AdminVacation}></Route>
        <Route exact path="/view-appointment" component={ViewAppointment}></Route>
        <Route exact path="/update-appointment" component={UpdateForm}></Route>
        <Route exact path="/cancel-appointment" component={CancelAppointment}></Route>
        <Route exact path="/update-user" component={UpdateUser}></Route>
        <Route exact path="/add-user" component={AddUser}></Route>
        <Route exact path="/delete-user" component={DeleteUser}></Route>
        <Route exact path="/view-user" component={ViewUser}></Route>
        <Route exact path="/add-vacation" component={AddVac}></Route> 
        <Route exact path="/add-doctor-vacation" component={AddDocVac}></Route>
        <Route exact path="/search-user" component={SearchUser}></Route>

        <Route exact path="/doctorhome"  component={UrlDoctor}></Route>
        <Route exact path="/doc-services" component={DocServices}></Route>
        <Route exact path="/add-record" component={AddRecord}></Route>
        <Route exact path="/view-patient" component={SearchPatient}></Route>
        <Route exact path="/view-profile" component={PatientProfile}></Route>
        <Route exact path="/view-doc-app" component={ViewDocApp}></Route>
        
        <Route exact path="/viewpatient" component={ViewPatient}></Route>
        <Route exact path="/veiw-record" component={VeiwRecord}></Route>

        <Route exact path="/receptionisthome" component={UrlReceptionist}></Route>

        </Switch>
        </div>
      </div>
    )
  }
}

export default App;
