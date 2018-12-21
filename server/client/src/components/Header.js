import React, { Component } from "react";
import { connect } from "react-redux";

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
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  };

  render() {
    return (
      <nav className="teal lighten-2">
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">
            Logo
          </a>
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
