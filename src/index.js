import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}
// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
