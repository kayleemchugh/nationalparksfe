import React, { Component } from "react";

class ServiceRequest extends Component {
  state = {};

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    console.log("Testing breakpoint");
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("http://localhost:8080/serviceRequest", {
      method: "POST",
      body: data
    });
  }

  render() {
    return (
      <div class="container">
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="email">Email address</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input
              type="email"
              class="form-control"
              id="firstName"
              placeholder="Jane"
            />
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input
              type="email"
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
