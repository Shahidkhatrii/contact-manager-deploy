import React, { useState } from "react";
import user from "../images/user.jpg";
import { Link } from "react-router-dom";

import { useContactsCrud } from "../context/ContactsCrudContext";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  const { showModalHandler, setDeleteId } = useContactsCrud();

  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>

      <i
        className="trash alternate outline icon red"
        style={{
          marginLeft: "10px",
          marginTop: "7px",
        }}
        onClick={() => {
          showModalHandler();
          setDeleteId(id);
        }}
      ></i>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon blue"
          style={{
            marginTop: "7px",
          }}
        ></i>
      </Link>
    </div>
  );
};
export default ContactCard;
