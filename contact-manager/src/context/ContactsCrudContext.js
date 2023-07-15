import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { v4 as uuid } from "uuid";
const ContactCrudContext = createContext();

export function ContactCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [showModal, setShowModal] = useState(false);
  //RetriveContacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  };
  //DeleteContact;
  const removeContactHandler = async (deleteId) => {
    await api.delete(`/contacts/${deleteId}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== deleteId;
    });
    setContacts(newContactList);
    setShowModal(false);
  };
  //AddContacts
  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact,
    };
    const response = await api.post("/contacts", request);
    setContacts([...contacts, response.data]);
  };
  //UpdateContact
  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };
  //modal
  const showModalHandler = () => {
    setShowModal(true);
  };

  const value = {
    contacts,
    retriveContacts,
    addContactHandler,
    updateContactHandler,
    showModal,
    showModalHandler,
    setShowModal,
    setDeleteId,
    deleteId,
    removeContactHandler,
  };

  return (
    <ContactCrudContext.Provider value={value}>
      {children}
    </ContactCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(ContactCrudContext);
}
