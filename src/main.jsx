import React, { Component } from "react";

class Main extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className=" m-3 pt-4 pb-1">
          <img
            className="resizepicture"
            src={require("./img/night5.PNG")}
            alt="night0"
          />
        </div>
        <div className="m-3 pb-5 pt-1">
          <img
            className=" resizepicture"
            src={require("./img/night6.PNG")}
            alt="night0"
          />
        </div>
      </div>
    );
  }
}

export default Main;
