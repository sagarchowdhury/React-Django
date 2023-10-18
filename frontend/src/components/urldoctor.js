import React, { Component} from 'react'
import { Switch, Route} from "react-router-dom";
import Header from './header';
import About from './about';
import DocServices from './DocServices';
import DoctorNav from './doctornav';
import AddRecord from './AddRecord';
import SearchPatient from './SearchPatient';
import ViewDocApp from "./VeiwDocApp";
import JsonData from '../data/data.json';
import VeiwRecord from "./VeiwRecord";
import PatientProfile from './ViewPatientProfile';

 
export class UrlDoctor extends Component {
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
        <div className="navbar">< DoctorNav/></div>
        <div >
        <Switch>
        <Route exact path="/home"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route exact path="/doctorhome"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route path="/about" exact render={()=><About data={this.state.landingPageData.About} />}/>
        <Route path="/doc-services" exact render={()=><DocServices data={this.state.landingPageData.DocServices} />}/>
        <Route exact path="/add-record" component={AddRecord}></Route>
        <Route exact path="/view-patient" component={SearchPatient}></Route>
        <Route exact path="/view-profile" component={PatientProfile}></Route>
        <Route exact path="/view-doc-app" component={ViewDocApp}></Route>
        <Route exact path="/veiw-record" component={VeiwRecord}></Route>
        </Switch>
        </div>
      </div>
    )
  }
}

export default UrlDoctor;
