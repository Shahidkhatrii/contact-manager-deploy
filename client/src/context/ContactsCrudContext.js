import { createContext, useContext, useState } from "react";
import api from "../api/contacts";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const ContactCrudContext = createContext();

export function ContactCrudContextProvider({ children }) {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  //Registering the User
  const registerUserHandler = async (data) => {
    try {
      const response = await api.post("/api/users/register", data);
      if (response) {
        navigate("/");
        toast.success("Registeration successful!");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //Login User
  const loginUserHandler = async (data) => {
    try {
      const response = await api.post("/api/users/login", data);
      if (!response) {
        toast.error("Something went wrong, please try again!");
      }
      localStorage.setItem("token", response.data.accessToken);
      navigate("/contactlist");
      setTimeout(() => {
        toast.success(`Welcome, ${response.data.username}!`);
      }, 2000);
      toast.success("Login successful!");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  //RetriveContacts
  // const retriveContacts = () => {
  //   return axios.get("http://localhost:5001/api/contacts/").then((response) => {
  //     setContacts(response.data);
  //   });
  // };
  const retriveContacts = async () => {
    setLoading(true);
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const response = await api.get("/api/contacts/", { headers });
    if (response.data) {
      setContacts(response.data);
    }
    setLoading(false);
  };

  //DeleteContact;
  const removeContactHandler = async (deleteId) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    await api.delete(`/api/contacts/${deleteId}`, { headers });
    const newContactList = contacts.filter((contact) => {
      return contact._id !== deleteId;
    });
    setContacts(newContactList);
    setShowModal(false);
  };

  //AddContacts
  const addContactHandler = async (contact) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const response = await api.post("/api/contacts/", contact, { headers });

    setContacts([...contacts, response.data]);
    navigate("/contactlist");
  };

  //UpdateContact
  const updateContactHandler = async (contact) => {
    const headers = {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    const response = await api.put(`/api/contacts/${contact._id}`, contact, {
      headers,
    });
    const { _id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact._id === _id ? { ...response.data } : contact;
      })
    );
  };

  //modal
  const showModalHandler = () => {
    setShowModal(true);
  };

  //Search functionality
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  const value = {
    contacts,
    retriveContacts,
    addContactHandler,
    updateContactHandler,
    showModal,
    showModalHandler,
    searchTerm,
    searchResults,
    searchHandler,
    setShowModal,
    setDeleteId,
    deleteId,
    removeContactHandler,
    loading,
    registerUserHandler,
    loginUserHandler,
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
