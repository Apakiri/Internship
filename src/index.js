import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Header extends React.Component {
  renderHeaderRightElements(str) {
    if (!str) {
      return (
        <a href="">
          <img
            className="search-btn"
            src={require("./img/whitesearchicon.png")}
            alt=""
          />
        </a>
      );
    } else {
      let strName = str.toUpperCase();
      return (
        <a href="">
          <HeaderRightElements name={strName} />
        </a>
      );
    }
  }
  render() {
    return (
      <div className="header">
        <div className="computer-header">
          <div className="computer-header_left-part">
            <div className="computer-header_left-part__logo-container">
              <a href="">
                <img
                  className="computer-header_left-part__logo-container__img"
                  src={require("./img/photoeditorsdk-export.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="computer-header_right-part">
            {this.renderHeaderRightElements("projects")}
            {this.renderHeaderRightElements("guides")}
            {this.renderHeaderRightElements("blog")}
            {this.renderHeaderRightElements("training & certification")}
            {this.renderHeaderRightElements()}
          </div>
        </div>
        <div className="mobile-header"></div>
      </div>
    );
  }
}
class HeaderRightElements extends React.Component {
  render() {
    return <div className="nav">{this.props.name}</div>;
  }
}

class Main extends React.Component {
  render() {
    return <div>Hello its main part</div>;
  }
}
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<App />, document.getElementById("root"));
