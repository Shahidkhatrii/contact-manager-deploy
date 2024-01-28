import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Message } from "semantic-ui-react";
import Layout from "./Layout";
import { useContactsCrud } from "../../context/ContactsCrudContext";
import { toast } from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { registerUserHandler } = useContactsCrud();

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) {
      toast.error("All fields are mandatory!");
      return;
    }
    registerUserHandler({
      username: form.name,
      email: form.email,
      password: form.password,
    });
    setForm({ name: "", email: "", password: "" });
  };

  useEffect(() => {
    localStorage.getItem("token") && navigate("/contactlist");
    // eslint-disable-next-line
  }, []);
  return (
    <Layout header="Create Your Contact Hub!">
      <form onSubmit={submit}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Username"
          className="auth-input-field"
          value={form.name}
          onChange={(e) => {
            setForm({ ...form, name: e.target.value });
          }}
        />
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
