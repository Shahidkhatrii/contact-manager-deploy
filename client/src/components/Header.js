import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { toast } from "react-hot-toast";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const HandleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    toast.success("You have successfully logged out!");
  };
  const HandleLogin = () => {
    navigate("/login");
  };
  const HandleRegister = () => {
    navigate("/signup");
  };
  return (
    <div className="ui fixed menu">
      <div className="ui center" id="header-flex">
        <img src={logo} alt="logo" />
        <h1 className="center" id="header-h1">
          Contact Manager
        </h1>
        {localStorage.getItem("token") && (
          <button
            className="ui button red"
            id="userBtn"
            onClick={HandleLogout}
          >
            Logout
          </button>
        )}
        {!localStorage.getItem("token") && location.pathname === "/signup" && (
          <button
            className="ui button blue"
            id="loginBtn"
            onClick={HandleLogin}
          >
            Login
          </button>
        )}
        {!localStorage.getItem("token") &&
          (location.pathname === "/" || location.pathname === "/login") && (
            <button
              className="ui button blue"
              id="signupBtn"
              onClick={HandleRegister}
            >
              Sign up
            </button>
          )}
      </div>
    </div>
  );
};

export default Header;
