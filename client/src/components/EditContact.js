import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useContactsCrud } from "../context/ContactsCrudContext";

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { _id, name, phone, email } = location.state.contact;
  const [contactForm, setContactForm] = useState({
    newName: name,
    newEmail: email,
    newPhone: phone,
  });
  const { updateContactHandler } = useContactsCrud();

  const update = (e) => {
    e.preventDefault();
    if (
      contactForm.newName === "" ||
      contactForm.newEmail === "" ||
      contactForm.newPhone === ""
    ) {
      alert("All the fields are mandatory!");
      return;
    }
    updateContactHandler({
      _id,
      name: contactForm.newName,
      phone: contactForm.newPhone,
      email: contactForm.newEmail,
    });
    setContactForm({
      newName: "",
      newEmail: "",
      newPhone: "",
    });
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
            value={contactForm.newName}
            onChange={(e) =>
              setContactForm({ ...contactForm, newName: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            type="number"
            name="number"
            placeholder="phone Number"
            value={contactForm.newPhone}
            onChange={(e) =>
              setContactForm({ ...contactForm, newPhone: e.target.value })
            }
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={contactForm.newEmail}
            onChange={(e) =>
              setContactForm({ ...contactForm, newEmail: e.target.value })
            }
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
