import React from "react";
import { Link } from "react-router-dom";
import logo from "./head-logo.png";
import registerImg from "./registerPng.svg";
import "./register.scss";

function Register() {
  return (
    <div className="main-Register">
      <div className="left-side">
        <div className="header">
          <img src={logo} id="logo-img" alt="" srcset="" />
        </div>
        <div className="body">
          <img src={registerImg} id="reg-img" alt="" srcset="" />
        </div>
        <p>
          Developers Diary is all about learning and sharing code. We strive to
          create such videos that can increase your wisdom, and help you to
          enlighten your development skills. You are warmly welcomed to the
          developers' diary where every single page of the diary contains
          content full of knowledge that can learn easily.{" "}
        </p>
      </div>
      <div className="right-side">
        <div className="top-right">
          <p>
            Already have an Account?
            <Link id="Links-signin" to="/">
              Sign In
            </Link>
          </p>
        </div>
        <div className="body-right">
          <div className="container">
            <h1>Create Account!</h1>
            <form>
              <div className="input-group">
                <h5> First Name</h5>
                <input type="text" name="Fname" id="fname" />
              </div>
              <div className="input-group">
                <h5> Last Name</h5>
                <input type="text" name="lname" id="lname" />
              </div>
              <div className="input-group">
                <h5> Email</h5>
                <input type="Email" name="email" id="email1" />
              </div>
              <div className="input-group">
                <h5> Password</h5>
                <input type="password" name="pwd" id="pwd1" />
              </div>
              <div className="input-group">
                <h5> Confirm Password</h5>
                <input type="password" name="pwd" id="pwd2" />
              </div>
              <input type="submit" id="sbtn" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
