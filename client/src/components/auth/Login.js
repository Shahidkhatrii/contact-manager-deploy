import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";

import { toast } from "react-hot-toast";
import { useContactsCrud } from "../../context/ContactsCrudContext";
const Login = () => {
  const navigate = useNavigate();
  const { loginUserHandler } = useContactsCrud();
  const [form, setForm] = useState({
    email: "Test1@gmail.com",
    password: "123456",
  });

  const submit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("All fields are mandatory!");
      return;
    }
    loginUserHandler({ email: form.email, password: form.password });
    setForm({ email: "", password: "" });
  };

  useEffect(() => {
    localStorage.getItem("token") && navigate("/contactlist");
    // eslint-disable-next-line
  }, []);

  return (
    <Layout header="Enter Your Contact Hub!">
      <form onSubmit={submit}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="E-mail address"
          className="auth-input-field"
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          className="auth-input-field"
          value={form.password}
          onChange={(e) => {
            setForm({ ...form, password: e.target.value });
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
