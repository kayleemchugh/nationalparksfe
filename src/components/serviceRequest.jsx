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
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={input => (this.input = input)} />
          </label>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              ref={input => (this.emailAddress = input)}
              type="email"
              class="form-control"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="text"
              ref={input => (this.firstName = input)}
              type="text"
              class="form-control"
              id="firstName"
              placeholder="Jane"
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              ref={input => (this.lastName = input)}
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Doe"
            />
          </div>
          <div class="form-group">
            <label for="nationalPark">Visiting National Park</label>
            <select class="form-control" id="nationalPark">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="serviceType">Service Request Type</label>
            <select class="form-control" id="serviceType">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="serviceType">Urgency of Request</label>
            <select class="form-control" id="urgency">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="notes">Notes</label>
            <textarea class="form-control" id="notes" rows="3" />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ServiceRequest;
