import React, { useState } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";
import { Link, useNavigate } from "react-router-dom";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { addContactHandler } = useContactsCrud();
  const navigate = useNavigate();
  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ name, email });
    setName("");
    setEmail("");
    navigate("/");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>

      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <Link to={`/`}>
          <button className="ui button red left">Cancel</button>
        </Link>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};
export default AddContact;
