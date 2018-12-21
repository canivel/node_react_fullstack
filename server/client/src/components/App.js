import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Landing from "./Landing";
import history from "../history";
export class App extends Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Switch>
              <Route path="/" exact component={Landing} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
