import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

export class Header extends Component {
  renderContent = () => {
    switch (this.props.auth) {
      case null:
        return "Loading";
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="0">
            <Payments />
          </li>,
          <li key="1">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  };

  render() {
    return (
      <nav className="light-blue darken-3">
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? "/dashboard" : "/"}
            className="left brand-logo"
          >
            Logo
          </Link>
          <ul id="nav-mobile" className="right">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Header);
