import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="overflow">
        <div className="container-fluid m-5 pl-5">
          <div className="row m-2">
            <div className="col-sm monserrat weight800 h2 black lineHeightDouble">
              about
            </div>
          </div>
          <div className="row m-2">
            <div className="col-8 merriweather weight300 h2 black fontSizeSmall">
              <p className="lineHeightDouble">
                Hello! I'm <span>Crystal.</span>
              </p>
              <p className="lineHeightDouble">
                {" "}
                I am currently studying at the University of Southern California
                and am working towards a Bachelor's Degree in Computer Science.
              </p>
              <p className="lineHeightDouble">
                Outside of code, my interests include fashion, dance, and art.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
