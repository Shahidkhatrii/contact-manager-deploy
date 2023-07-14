import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { v4 as uuid } from "uuid";
const ContactCrudContext = createContext();

export function ContactCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  //RetriveContacts
  const retriveContacts = async () => {
    const response = await api.get("/contacts");
    if (response.data) setContacts(response.data);
  };

  //DeleteContact
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
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
    const response = await api.put(`/contacts/${contact.id}`);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const value = {
    contacts,
    retriveContacts,
    removeContactHandler,
    addContactHandler,
    updateContactHandler,
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
