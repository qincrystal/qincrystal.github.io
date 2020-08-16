import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="overflow">
        <div className="container-fluid m-5 pl-5">
          <div className="row m-md-2">
            <div className="col-sm montserrat weight800 h2 black lineHeightDouble">
              projects
            </div>
          </div>
          <div className="row m-md-2">
            <div className="col-8 merriweather weight300 h2 black fontSizeSmall">
              <p className="lineHeightDouble">Check out these fun projects!</p>
            </div>
          </div>
          <div className="row m-md-2">
            <div className="col-8 merriweather weight300 h2 black fontSizeSmall">
              <p className="weight500">7 days of Web Development</p>
              <p className="lineHeightDouble size12">
                I am taking summer 2020 as a time to explore front end web
                development. From basic HTML to libraries such as ReactJS, I am
                learning how to make small interactive websites for my
                interests. Github repository coming soon!
              </p>
            </div>
          </div>
          <div className="row m-md-2">
            <div className="col-8 merriweather weight300 h2 black fontSizeSmall">
              <p className="weight500 ">Search Engine Simulator</p>
              <p className="lineHeightDouble size12">
                A search engine simulator on the terminal that searches and
                returns results with the PageRank Algorithm. Uses a web crawler
                to add files linked in other files. Created with C++ for a class
                project.
              </p>
            </div>
          </div>
          <div className="row m-md-2">
            <div className="col-8 merriweather weight300 h2 black fontSizeSmall">
              <p className="weight500 bold">Filesystem</p>
              <p className="lineHeightDouble size12">
                A simple filesystem that uses terminal commands to manage and
                navigate directories and files. Created with C++ for a class
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
