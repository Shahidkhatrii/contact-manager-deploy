import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";
import { useContactsCrud } from "../../context/ContactsCrudContext";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { registerUserHandler } = useContactsCrud();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("All fields are mandatory!");
      return;
    }
    registerUserHandler({ username: name, email, password });
    setName("");
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    localStorage.getItem("token") && navigate("/contactlist");
    // eslint-disable-next-line
  }, []);
  return (
    <Layout header="Sign up to get started">
      <form onSubmit={submit}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Username"
          className="auth-input-field"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
          Sign up
        </Button>
      </form>

      <Message>
        <Link to="/login">Already Registered?</Link>
      </Message>
    </Layout>
  );
};
export default Signup;
