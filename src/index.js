import React,{ Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store"; //
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Registration from "./components/Registration/Registration";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: ""
    };
  }

  handleSearch = value => {
    this.setState({ searchString: value });
  };

  ///

  render() {
    return (
      <React.Fragment>
        <Header handleSearch={this.handleSearch} />
        <Main searchString={this.state.searchString} />
      </React.Fragment>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route exact path="/login" component={Registration} />
      <Route path="/protected" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
