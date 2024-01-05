// src/App.js

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul className="navbar">
            <li className="list-items">
              <Link to="/">
                <button className="button" type="button">
                  Home
                </button>
              </Link>
            </li>
            <li className="list-items">
              <Link to="/about">
                <button className="button" type="button">
                  About
                </button>
              </Link>
            </li>
            <li className="list-items">
              <Link to="/projects">
                <button className="button" type="button">
                  Projects
                </button>
              </Link>
            </li>
            <li className="list-items">
              <Link to="/contact">
                <button className="button" type="button">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about" component={About} />
          <Route
            path="/projects"
            render={(props) => (
              <Projects
                {...props}
                projects={projects}
                addProject={addProject}
              />
            )}
          />
          <Route path="/contact" component={Contact} />
          <Route
            path="/"
            exact
            render={() => (
              <div className="bg">
                <div className="text-profile">
                  <h1>
                    Hello, My name is{" "}
                    <span className="name">Venkata Ramesh Eeda</span>
                  </h1>
                  <p>
                    Strong in design and integration with intuitive
                    <br />
                    problem-solving skills. Proficient in HTML&CSS, BOOSTRAUP,
                    <br />
                    PYTHON, JAVASCRIPT, SQL, NODE.JS and REACT,JS <br />
                    Passionate about implementing and launching new projects.{" "}
                  </p>
                  <a target="_blank"
                    href="https://www.linkedin.com/in/eeda-venkata-ramesh-a93a3222b/"
                    className="button-1"
                  >
                    LinkedIn
                  </a>
                </div>
                <div>
                  <img
                    alt="profile"
                    src="https://res.cloudinary.com/dcr2fwzyk/image/upload/v1704427023/NicePng_man-standing-png_849121_eviykm.png"
                  />
                </div>
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
