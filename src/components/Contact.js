import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Contact Page</h1>
      <h5>Bangladesh.</h5>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
