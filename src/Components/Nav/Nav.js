import React from "react";
import Styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <>
      <div className={Styles.navbar}>
        <span id={Styles.ul1}>
          <h3 id={Styles.traine}>Trainee</h3>
          <h5 id={Styles.hFive}>
            At
            <p className={Styles.function}>FunctionUp</p>
          </h5>
        </span>
        <ul>
          <Link to="/">
            <button className={Styles.navbutton}>Home</button>
          </Link>
          <Link to="/about">
            <button className={Styles.navbutton}>About Me</button>
          </Link>
          <Link to="/login">
            <button className={Styles.navbutton}>Login</button>
          </Link>
          <Link to="/register">
            <button className={Styles.navbutton}>Register</button>
          </Link>
        </ul>
      </div>
    </>
  );
}
