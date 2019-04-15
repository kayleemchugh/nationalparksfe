import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          National Parks Service Request
          {/* <span className="badge badge-pill badge-secondary">
            Count : {this.props.totalCounters}
          </span> */}
        </a>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link">Employee Sign-in</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
