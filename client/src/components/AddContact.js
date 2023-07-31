import React, { useState } from "react";
import { useContactsCrud } from "../context/ContactsCrudContext";

const AddContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { addContactHandler } = useContactsCrud();

  const add = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || phone === "") {
      alert("All the fields are mandatory!");
      return;
    }
    addContactHandler({ name, phone, email });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>

      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            name="number"
            placeholder="phone Number"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {/* <div className="field">
          <label htmlFor="image">Upload image</label>
          <input
            type="file"
            name="image"
            placeholder="image"
            required
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </div> */}
        <div
          className="ui button red left"
          onClick={() => {
            window.location.href = "/contactlist";
          }}
        >
          Cancel
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};
export default AddContact;
