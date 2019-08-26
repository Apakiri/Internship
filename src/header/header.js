const Header = props => {
  const renderHeaderRightElements = elements => {
    return elements.map(element => {
      if (!element) {
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
        let strName = element.toUpperCase();
        return (
          <a href="">
            <div className="nav">{strName}</div>
          </a>
        );
      }
    });
  };

  const headerElements = [
    "projects",
    "guides",
    "blog",
    "training & certification",
    ""
  ];

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
          {renderHeaderRightElements(headerElements)}
        </div>
      </div>
      <div className="mobile-header"></div>
    </div>
  );
};
export default Header;
