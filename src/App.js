import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import ServiceRequest from "./components/serviceRequest";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div className="col-xs-7 col-xs-offset-1">
          <ServiceRequest />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
