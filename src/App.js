import React from "react";
import "./css/App.css";
import "./css/fonts.css";
import "./css/navBar.css";
import "./css/image.css";
import "./css/screen-size.css";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import Main from "./main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <div>
          <div>
            <div>
              <nav
                className="navbar navbar-default
               justify-content-center"
              >
                <Link
                  to="/"
                  className="navbar-header black h2 montserrat weight800 letterspace0"
                  href="#"
                  id="name"
                >
                  CRYSTAL QIN
                </Link>
              </nav>
              <div className=" d-flex justify-content-center">
                <div className="row" id="navRow">
                  <Link
                    to="/about"
                    className="col-4 d-flex my-auto weight300 gray text-center "
                    id="about"
                  >
                    about
                  </Link>
                  <Link
                    to="/projects"
                    className="col-4 d-flex my-auto weight300 gray text-center "
                    id="projects"
                    href="#"
                  >
                    projects
                  </Link>
                  <Link
                    to="/contact"
                    className="col-4 d-flex my-auto weight300 gray text-center "
                    id="contact"
                    href="#"
                  >
                    contact
                  </Link>
                </div>
              </div>
            </div>
            <div className="side-bottomright m-3">
              <div className="d-flex flex-column ">
                <a
                  href="https://linkedin.com/in/crystal-qin-a63649194"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-linkedin m-2"></i>
                </a>
                <a
                  href="https://github.com/qincrystal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-github m-2"></i>
                </a>
                <a
                  href="https://www.instagram.com/crystal_of_qin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-2x fa-instagram m-2"></i>
                </a>
              </div>
            </div>
          </div>

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
