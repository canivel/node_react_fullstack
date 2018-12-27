import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Landing from "./Landing";
import history from "../history";
import Dashboard from "./Dashboard";
import SurveyNew from "./surveys/SurveyNew";

export class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/dashboard" exact component={Dashboard} />
              <Route path="/surveys/new" exact component={SurveyNew} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
