import React, { Component } from "react";
import MessageForm from "./components/MessageForm";
class Contact extends Component {
  render() {
    return (
      <div className="overflow">
        <div className="container-fluid m-5  pl-5 ">
          <div className="row m-2 m-2">
            <div className="col-sm monserrat weight800 h2 black lineHeightDouble">
              contact
            </div>
          </div>
          <div className="row m-2 m-2">
            <div className="col-8 merriweather weight300 h2 black fontSizeSmall mr-5 pr-5">
              <p className="lineHeightDouble">
                Interested in connecting? Feel free to shoot me a{" "}
                <span className="msg-link">
                  <a href="mailto:qin.crystal0@gmail.com" className="msg-email">
                    message
                  </a>
                </span>
              </p>
              <p>or find me on any of my social media. </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
