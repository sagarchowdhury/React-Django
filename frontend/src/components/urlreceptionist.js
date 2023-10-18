import React, { Component} from 'react'
import Header from './header';
import ReceptionistNav from './receptionistnav';
import RecepPay from './RecepPay';
import ViewPatient from './ViewPatient';
import JsonData from '../data/data.json';
import { Switch, Route} from "react-router-dom";
import ViewDocApp from "./VeiwDocApp";

 
export class UrlReceptionist extends Component {
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
        <div className="navbar">< ReceptionistNav/></div>
        <div >
        <Switch>
        <Route exact path="/home"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route exact path="/"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route exact path="/receptionisthome"  render={()=><Header data={this.state.landingPageData.Header}/>}/>
        <Route exact path="/payment" component={RecepPay}></Route>
        <Route exact path="/view-patient" component={ViewPatient}></Route>
        <Route exact path="/view-doc-app" component={ViewDocApp}></Route>
        </Switch>
        </div>
      </div>
    )
  }
}

export default UrlReceptionist;
