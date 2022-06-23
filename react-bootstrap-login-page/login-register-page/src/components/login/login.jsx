import React from "react";
import { Link } from "react-router-dom";
import logo from "./logoPng.png";
import welcomeimg from "./welcomeback.svg";
import "./login.scss";

function Login() {
  return (
    <div className="main-login">
      <div className="login-contain">
        <div className="left-side">
          <div className="img-class">
            <img src={logo} id="img-id" alt="" />
          </div>

          <form>
            <label htmlFor="emil1">Email</label>
            <input placeholder="Enter your email..." type="email" id="emil1" />
            <label htmlFor="pwd1">Password</label>
            <input
              placeholder="Enter password"
              type="password"
              autoComplete="false"
              id="pwd1"
            />
            <button type="submit" id="sub_butt">
              Login
            </button>
          </form>

          <div className="footer">
            <h4>
              Don't have an Account ?{" "}
              <Link className="link" to="/Register">
                Register Now
              </Link>
            </h4>
          </div>
        </div>
        <div className="right-side">
          <div className="welcomeNote">
            <h3>Welcome Back!</h3>
          </div>
          <div className="welcomeImg">
            <img src={welcomeimg} id="wel-img-id" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
