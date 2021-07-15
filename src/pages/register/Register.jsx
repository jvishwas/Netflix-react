import { React, useState } from "react";
import { useRef } from "react";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const registerHandle = () => {
    setEmail(emailRef.current.value);
  };

  const passwordHandle = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="register">
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
        <h1>unlimitted, Movies TV show, and Moveis</h1>
        <h2>Watch Anywhere, Cancel Anytime.</h2>
        <p>Ready to watch ? Enter your email to LogIn</p>

        {!email ? (
          <div className="input-div">
            <input
              type="email"
              ref={emailRef}
              placeholder="email address"
              className="inputText"
            ></input>
            <button className="Button" onClick={registerHandle}>
              Get Ready
            </button>
          </div>
        ) : (
          <form className="input-div">
            <input
              type="password"
              ref={passwordRef}
              placeholder="Enter Password"
              className="inputText"
            ></input>
            <button className="Button" onClick={passwordHandle}>
              Go For Membership
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
