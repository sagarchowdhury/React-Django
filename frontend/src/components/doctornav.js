import React, { Component } from "react";

import { Link } from "react-router-dom";
const DoctorNav =()=> {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="/home">
              Smart Health Site
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/doctorhome" className="page-scroll">
                  home
                </Link>
              </li>
              <li>
              <a href="/about" className="page-scroll">
                  About
                </a>
              </li>
              <li>
                <a href="/doc-services" className="page-scroll">
                  Services
                </a>
              </li>
              <li>
                <a href="/home" className="page-scroll">
                  Log out
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }


export default DoctorNav;
