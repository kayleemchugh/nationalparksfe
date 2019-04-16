import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import ServiceRequest from "./components/serviceRequest";
import Visitor from "./components/visitor";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showVisitorForm: true,
      showServiceRequestForm: false
    };

    this.handleVisitorSubmit = this.handleVisitorSubmit.bind(this);
  }

  handleVisitorSubmit(visitor) {
    this.setState({
      showVisitorForm: false,
      showServiceRequestForm: true
    });

    // fetch("http://localhost:8080/visitor", {
    //   method: "POST",
    //   body: visitor
    // });
  }

  render() {
    const showVisitorForm = this.state.showVisitorForm;
    const showServiceRequestForm = this.state.showServiceRequestForm;

    let form;

    if (showVisitorForm) {
      form = <Visitor handleVisitorSubmit={this.handleVisitorSubmit} />;
    } else if (showServiceRequestForm) {
      form = <ServiceRequest />;
    }

    return (
      <React.Fragment>
        <NavBar />
        <div className="col-xs-7 col-xs-offset-1">{form}</div>
      </React.Fragment>
    );
  }
}

export default App;
