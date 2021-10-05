import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import "./header.css";
import logo from "./logo.png";

function Header() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <body>
        <header>
          <div className="navbar">
            <div className="navbar1">
              <nav id="nav1">
                <ul>
                  <li>
                    <a href="/">ACADEMICS</a>
                  </li>
                  <li>
                    <a href="/">ADMISSIONS</a>
                  </li>
                  <li>
                    <a href="/">STUDENTS</a>
                  </li>
                  <li>
                    <a href="/">FACULTY</a>
                  </li>
                  <li>
                    <a href="/">ALUMNI</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <FaEnvelope className="fa fa-envelope" />
                    headjkinstitute@gmail.com
                  </li>
                  <li>
                    <FaPhone className="fa fa-phone" />
                    +91-9470311972
                  </li>
                </ul>
              </nav>
            </div>
            <hr className="nav-divider"></hr>
            <nav id="nav2">
              <span className="logo">
                <img src={logo} alt="Institute_Logo" />
                <span>
                  <strong>
                    <h1>J.K. INSTITUTE</h1>
                    <h3>of Applied Physics and Technology</h3>
                  </strong>
                </span>
              </span>
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-home" /> Home
                  </a>
                </li>
                <li>
                  <a href="/">
                    About
                    <i className="fa fa-chevron-down" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    Courses
                    <i className="fa fa-chevron-down" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    Events
                    <i className="fa fa-chevron-down" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    Contact
                    <i className="fa fa-chevron-down" />
                  </a>
                </li>
                {/* <li>
                  <a id="search" href="#">
                    <FaSearch className="fa fa-search" />
                  </a>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="ethics_excellence">
            <h3>IN PURUSUIT OF</h3>
            <h1>Ethics & Excellence</h1>
            <hr />
            <p>
              “ The department's goal is to attain the highest standards of
              technical education, training, and research, as well as to produce
              a new breed of competent engineers and software professionals
              needed in today's rapidly changing global world. The department
              focuses on basics and enables young brains to comprehend and
              manage with change. “
            </p>
          </div>
        </header>
      </body>
    </>
  );
}

export default Header;
