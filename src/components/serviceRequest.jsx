import React, { Component } from "react";
// require("react-datetime");

class ServiceRequest extends Component {
  state = {};

  serviceRequest = {
    serviceTypeId: "",
    visitorId: "",
    dateRequested: "",
    parkId: "",
    isActive: true,
    description: "",
    title: "",
    urgency: ""
  };

  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.serviceRequest.serviceTypeId = this.serviceTypeId.value;
    this.serviceRequest.visitorId = "bring in visitor id";
    this.serviceRequest.dateRequested = new Date();
    this.serviceRequest.parkId = this.parkId.value;
    this.serviceRequest.description = this.description.value;
    this.serviceRequest.title = this.description.title;
    this.serviceRequest.urgency = this.urgency.value;

    fetch("http://localhost:8080/serviceRequest", {
      method: "POST",
      body: this.serviceRequest
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Request Title</label>
            <input
              ref={input => (this.title = input)}
              type="text"
              className="form-control"
              name="title"
              placeholder="Bathroom Issues"
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
            <textarea
              ref={input => (this.description = input)}
              className="form-control"
              id="notes"
              rows="3"
            />
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
