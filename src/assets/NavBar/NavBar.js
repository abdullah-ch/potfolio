import React from "react";
import styles from "./NavBar.module.css";
import signature from "../Images/signature.png.png";

const NavBar = () => {
  return (
    <div className={styles.NavBar}>
      <nav
        className="navbar navbar-expand-sm navbar-light"
        style={{ "background-color": "white" }}
      >
        <a href="sarim" className="navbar-brand">
          <img src={signature} alt="myname" width="300px" />
        </a>

        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#mymenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse anime" id="mymenu">
          <ul
            className="navbar-nav ml-auto"
            style={{ "font-size": "large", "font-weight": "bolder" }}
          >
            <li className="navbar-item" style={{ "margin-right": "50px" }}>
              <a href="href" className="navbar-link content">
                Home
              </a>
            </li>
            <li className="navbar-item" style={{ "margin-right": "50px" }}>
              <a href="href" className="navbar-link content">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <ul>
        <li>
          <a href="skills.asp">Skills</a>
        </li>
        <li>
          <a href="blog.asp">Blog</a>
        </li>
        <li>
          <a href="about.asp">About</a>
        </li>
        <li>
          <img className={styles.logo} src={signature} alt="sarim hassan" />
        </li>
        <li>
          <a href="default.asp">Home</a>
        </li>
      </ul> */}
    </div>
  );
};

export default NavBar;
