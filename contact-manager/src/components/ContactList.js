import React, { useEffect, useState } from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { useContactsCrud } from "../context/ContactsCrudContext";

const ContactList = (props) => {
  const { contacts, retriveContacts, showModal } = useContactsCrud();

  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });
  useEffect(() => {
    retriveContacts();
  }, []);

  return (
    <div className="main">
      {showModal && <Modal />}
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>

      <div className="ui celled list">{renderContactList}</div>
    </div>
  );
};

export default ContactList;
