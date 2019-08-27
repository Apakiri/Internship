import React from "react";
const Main = () => {
    const cardsArray = [
      {
        img_src: require("../../img/photoeditorsdk-export (6).png"),
        title: "spring boot",
        description:
          "Takes an opinionated view of building Spring applications and gets you up and running as quickly as possible."
      },
      {
        img_src: require("../../img/photoeditorsdk-export (1).png"),
        title: "spring framework",
        description:
          " Provides core support for dependency injection, transaction management, web apps, data access, messaging and more."
      },
      {
        img_src: require("../../img/photoeditorsdk-export (3).png"),
        title: "spring cloud data flow",
        description:
          "An orchestration service for composable data microservice applications on modern runtimes."
      },
      {
        img_src: require("../../img/9a274Wx_.jpg"),
        title: "spring cloud",
        description:
          "Provides a set of tools for common patterns in distributed systems.Useful for building and deploying microservices."
      },
      {
        img_src: require("../../img/photoeditorsdk-export (4).png"),
        title: "spring data",
        description:
          "Provides a consistent approach to data access – relational,non-relational, map-reduce, and beyond."
      },
      {
        img_src: require("../../img/photoeditorsdk-export (5).png"),
        title: "spring integration",
        description:
          "Supports the well-known Enterprise Integration Patterns via lightweight messaging and declarative adapters"
      }
    ];
    const renderedCards = cardsArray.map(element => {
      return (
        <div className="projectCardsContainer__EachCard">
          <div className="projectCardsContainer__EachCard__img">
            <img
              className="projectCardsContainer__img_sizes"
              src={element.img_src}
              alt=""
            />
          </div>
          <div className="projectCardsContainer__EachCard__title">
            <p>{(element.title).toUpperCase()}</p>
          </div>
          <div className="projectCardsContainer__EachCard__descripion">
            {element.description}
          </div>
        </div>
      );
    });
    return (
      <div className="main">
        <h1 className="main__title">Main Projects</h1>
        <p className="main__description">
          From configuration to security, web apps to big data – whatever the
          infrastructure needs of your application may be, there is a Spring
          Project to help you build it. Start small and use just what you need
          –Spring is modular by design
        </p>
        <div className="projectCardsContainer">{renderedCards}</div>
      </div>
    );
  };
  export default Main;