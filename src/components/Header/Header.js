import React from "react";
const Header = props => {
  const renderHeaderRightElements = elements => {
    return elements.map(element => {
      if (!element) {
        return (
          <div className="nav_btn">
            <a href="">
              <img
                className="search-btn"
                src={require("../../img/whitesearchicon.png")}
                alt=""
              />
            </a>
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
  function MobileSearchBar(params) {
    return (
      <div className="MobileSearchBar">
        <div>
          <input type="text" />
        </div>
        <div>Home</div>
        <div>Projects</div>
        <div>Guides</div>
        <div>Blog</div>
        <div>Training & Certification</div>
      </div>
    );
  }
  const headerElements = [
    "projects",
    "guides",
    "blog",
    "training & certification",
    ""
  ];
   const btnClick = () => {
    alert("1")
  }
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
          {renderHeaderRightElements(headerElements)}
        </div>
      </div>
      <div className="mobile-header">
        <MobileSearchBar />>
        <button className="btn-mobile" onClick={btnClick}>
          <img src={require("../../img/btn.JPG")} alt="" />
        </button>
        <a href="">
          <img
            className="mobile-header__logo"
            src={require("../../img/mobileLogo.JPG")}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};
export default Header;
