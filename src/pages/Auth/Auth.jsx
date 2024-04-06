import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>ZKC Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>

      <Sigup />
    </div>
  );
};

function Sigup() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign Up</h3>

        {/* first name and last name */}
        <div>
          <input
            type="text"
            placeholder="First name"
            className="infoInput"
            name="firstname"
          />

          <input
            type="text"
            placeholder="Last name"
            className="infoInput"
            name="lastname"
          />
        </div>

        {/* Usernames */}
        <div>
          <input
            type="text"
            className="infoInput"
            name="username"
            placeholder="Usernames"
          />
        </div>

        {/* password and confirm password */}
        <div>
          <input
            type="text"
            className="infoInput"
            name="password"
            placeholder="Password"
          />

          <input
            type="text"
            className="infoInput"
            name="Confirmpass"
            placeholder="Confirm Password"
          />
        </div>
        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login!
          </span>
        </div>

        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Auth;
