import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UrlReceptionist from './components/urlreceptionist'
import UrlDoctor from './components/urldoctor';
import UrlAdmin from './components/urladmin';
import { BrowserRouter} from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>

  { <App/>}

  {/* { <UrlDoctor/> } */}

   {/* { <UrlAdmin/> } */}

   {/* <UrlReceptionist/> */}

  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
