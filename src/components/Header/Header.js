import React from "react";
import Main from "../Main/Main";
class Header extends React.Component {
  renderHeaderRightElements = elements => {
    return elements.map(element => {
      if (!element) {
        return (
          <div className="nav_btn" onClick={this.handleSearchClick}>
            <img
              className="search-btn"
              src={require("../../img/whitesearchicon.png")}
              alt=""
            />
          </div>
        );
      } else {
        let strName = element.toUpperCase();
        return (
          <div className="nav">
            <a href="">{strName}</a>
          </div>
        );
      }
    });
  };
  renderMobileSearchBar(headerElementsMobile) {
    const { handleSearch } = this.props;
    return (
      <div className="mobileSearchBar">
        <div className="mobileSearchBar__input mobileSearchBarNav">
          <input
            className="mobileSearchBar__input__field"
            type="text"
            placeholder="Search..."
            onChange={e => handleSearch(e.target.value)}
          />
        </div>
        {headerElementsMobile.map(el => {
          return <div className="mobileSearchBar__nav">{el.toUpperCase()}</div>;
        })}
      </div>
    );
  }

  handleSearchClick = () => {
    const searchField = document.querySelector(".search-field");
    const searchBtn = document.querySelector(".search-btn");
    if (!searchBtn.classList.contains("clicked")) {
      searchBtn.style.src = require("../../img/whitesearchicon.png");
      searchBtn.classList.add("clicked");
    } else {
      searchBtn.classList.remove("clicked");
    }

    searchField.classList.toggle("search-field_active");
    const searchfield = document.querySelector(".search-field__search");
  };
  handlebtnClick = () => {
    let mobileSearchBar = document.querySelector(".mobileSearchBar");
    let btnMobile = document.querySelector(".btn-mobile");
    let mobileHeaderLogo = document.querySelector(".mobile-header-logo");
    mobileSearchBar.classList.toggle("mobileSearchBar_active");
    btnMobile.classList.toggle("btn-mobile_active");
    mobileHeaderLogo.classList.toggle("mobile-header-logo_active");
  };

  render() {
    const { handleSearch } = this.props;
    const headerElements = [
      "projects",
      "guides",
      "blog",
      "training & certification",
      ""
    ];
    const headerElementsMobile = [
      "projects",
      "guides",
      "blog",
      "training & certification"
    ];
    return (
      <div className="header">
        <div className="computer-header">
          <div className="computer-header_left-part">
            <div className="computer-header_left-part__logo-container">
              <a href="">
                <img
                  className="computer-header_left-part__logo-container__img"
                  src={require("../../img/photoeditorsdk-export.png")}
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className="computer-header_right-part">
            {this.renderHeaderRightElements(headerElements)}
          </div>
        </div>
        <div className="mobile-header">
          {this.renderMobileSearchBar(headerElementsMobile)}
          <button className="btn-mobile" onClick={this.handlebtnClick}>
            <img
              className="btn-mobile__img"
              src={require("../../img/btn.JPG")}
              alt=""
            />
          </button>
          <div className="mobile-header-logo">
            <a href="">
              <img
                // className="mobile-header__logo"
                src={require("../../img/mobileLogo.JPG")}
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="search-field">
          <input
            className="search-field__search"
            type="text"
            placeholder="Search for documentation,guides,and poats"
            onChange={e => handleSearch(e.target.value)}
          />
        </div>
      </div>
    );
  }
}
export default Header;
