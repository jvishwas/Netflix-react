import React from "react";
import "./login.scss";

export default function LogIn() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="netflix-logo"
            src="../assets/netflix-logo/Netflix_logo.svg"
            alt="uploading "
          />
          <button className="logInButton">LogIn</button>
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="email address or phone no." />
          <input type="password" placeholder="password" />
          <button className="loginButton">Sign Up</button>
          <span>
            New to Netflix? <b>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            robot.
            <b> Learnn more.</b>
          </small>
        </form>
      </div>
    </div>
  );
}
