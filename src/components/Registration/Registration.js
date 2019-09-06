import React from "react";
import { createStore, combineReducers, compose } from "redux";
import { connect } from "react-redux";
import { login } from "./../../redux/actions/action";
import { store } from "../../redux/store";
import { App } from "../../index";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    // this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = e => {
    const isAuth = this.props.login(this.state.username, this.state.password);
    if (isAuth) {
      this.props.history.push("/protected");
    }
  };

  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div>
          <input
            className="usernameField"
            type="text"
            onChange={e => {
              this.setState({ username: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            className="passwordField"
            type="text"
            onChange={e => {
              this.setState({ password: e.target.value });
            }}
          />
        </div>
        <div>
          <button onClick={this.onSubmit}>Check</button>
        </div>
      </React.Fragment>
    );
  }
}
const mapDispatchToProps = {
  login
};

const withConnect = connect(
  null,
  mapDispatchToProps
);

export default compose(
  withRouter,
  withConnect
)(Registration);
