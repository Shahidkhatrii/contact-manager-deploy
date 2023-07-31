import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { _id, name, phone, email } = location.state.contact;
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPhone, setNewPhone] = useState(phone);
  const { updateContactHandler } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    if (newName === "" || newEmail === "" || newPhone === "") {
      alert("All the fields are mandatory!");
      return;
    }
    updateContactHandler({
      _id,
      name: newName,
      phone: newPhone,
      email: newEmail,
    });
    setNewName("");
    setNewPhone("");
    setNewEmail("");
    navigate("/contactlist");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            type="number"
            name="number"
            placeholder="phone Number"
            value={newPhone}
            onChange={(e) => setNewPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <Link to={`/contactlist`}>
          <button className="ui button red left">Cancel</button>
        </Link>
        <button className="ui button blue">Save</button>
      </form>
    </div>
  );
};
export default EditContact;
