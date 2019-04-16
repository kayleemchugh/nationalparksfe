import React, { Component } from "react";

class Visitor extends Component {
  state = {};

  render() {
    const visitor = {};

    const { handleVisitorSubmit } = this.props;
    return (
      <div className="container">
        <form onSubmit={() => this.props.handleVisitorSubmit(visitor)}>
          <div className="form-group">
            <label>Email address</label>
            <input
              ref={input => (visitor.emailAddress = input)}
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
              ref={input => (visitor.firstName = input)}
              className="form-control"
              id="firstName"
              placeholder="Jane"
            />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              ref={input => (visitor.lastName = input)}
              className="form-control"
              id="lastName"
              placeholder="Doe"
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

export default Visitor;
