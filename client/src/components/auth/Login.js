import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";
import { toast } from "react-hot-toast";
import { useContactsCrud } from "../../context/ContactsCrudContext";
const Login = () => {
  const { loginUserHandler } = useContactsCrud();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const submit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are mandatory!");
      return;
    }
    loginUserHandler({ email, password });
    setEmail("");
    setPassword("");
  };
  return (
    <Layout header="Hello Again!">
      <form onSubmit={submit}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
          className="auth-input-field"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          className="auth-input-field"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button color="blue" fluid size="huge">
          Login
        </Button>
      </form>
      <Message>
        <Link to="/signup">Not Registered?</Link>
      </Message>
    </Layout>
  );
};

export default Login;
