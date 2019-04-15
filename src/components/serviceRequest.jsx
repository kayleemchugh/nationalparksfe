import React, { Component } from "react";

class ServiceRequest extends Component {
  state = {};

  visitor = {
    firstName: "",
    lastName: "",
    emailAddress: "",
    zipCode: ""
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.visitor.emailAddress = this.emailAddress.value;
    alert("The value is: " + this.emailAddress.value);
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    console.log("DATA" + data.email);

    fetch("http://localhost:8080/visitor", {
      method: "POST",
      body: this.visitor
    });

    // fetch("http://localhost:8080/serviceRequest", {
    //   method: "POST",
    //   body: data
    // });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            <input
              ref={input => (this.emailAddress = input)}
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              ref={input => (this.firstName = input)}
              className="form-control"
              id="firstName"
              placeholder="Jane"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              ref={input => (this.lastName = input)}
              className="form-control"
              id="lastName"
              placeholder="Doe"
            />
          </div>
          <div className="form-group">
            <label>Visiting National Park</label>
            <select className="form-control" id="nationalPark">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label>Service Request Type</label>
            <select className="form-control" id="serviceType">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label>Urgency of Request</label>
            <select className="form-control" id="urgency">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className="form-group">
            <label>Notes</label>
            <textarea className="form-control" id="notes" rows="3" />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ServiceRequest;
