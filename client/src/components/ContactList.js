import React, { useEffect } from "react";
import ContactCard from "./ContactCard";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useContactsCrud } from "../context/ContactsCrudContext";
import ContactListSkeleton from "./ContactListSkeleton";

const ContactList = (props) => {
  const navigate = useNavigate();
  const {
    contacts,
    retriveContacts,
    showModal,
    searchTerm,
    searchResults,
    searchHandler,
    loading,
  } = useContactsCrud();
  const onUserSearch = (e) => {
    searchHandler(e.target.value);
  };
  const renderContactList = (
    searchTerm.length < 1 ? contacts : searchResults
  ).map((contact) => {
    return <ContactCard contact={contact} key={contact._id} />;
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      retriveContacts();
    } else {
      navigate("/");
    }
    // eslint-disable-next-line
  }, []);
  // useEffect(() => {
  //   retriveContacts();
  // });

  return (
    <div className="main">
      {showModal && <Modal />}
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h2>
      <div className="ui search">
        <div
          className="ui icon input"
          style={{
            width: "100%",
          }}
        >
          <input
            type="text"
            placeholder="Search contacts"
            className="prompt"
            value={searchTerm}
            onChange={(e) => onUserSearch(e)}
          />
          <i className="search icon"></i>
        </div>
      </div>

      <div className="ui celled list">
        {loading ? (
          <ContactListSkeleton
            amount={renderContactList.length || 1}
            height={100}
            styleHeight={5}
          />
        ) : (
          renderContactList
        )}
        {loading === false &&
          renderContactList.length === 0 &&
          "NO CONTACTS AVAILABLE"}
      </div>
    </div>
  );
};

export default ContactList;
