import React from "react";
import { Form, Header } from "semantic-ui-react";
import "./auth.css";
import "../App.css";
import logo from "../../images/logo.png";
const Layout = (props) => {
  return (
    <div>
      <p className="note-for-users">
        Initial login or other activity may have a brief delay due to server
        activation after 15 minutes of inactivity.
        <br />
        Just click on login for Test user and please wait for few seconds
        initially...
      </p>
      <div className="auth-main">
        <div className="auth-content">
          <div className="auth-card">
            <img src={logo} alt="Logo" className="auth-logo" />
            <Header as="h2" color="black" textAlign="center">
              {props.header}
            </Header>
            <Form.Group size="large" className="auth-form" autoComplete="off">
              {props.children}
            </Form.Group>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
