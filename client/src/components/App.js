import React from "react";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactDetails from "./ContactDetails";
import { ContactCrudContextProvider } from "../context/ContactsCrudContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
    <div className="ui container">
      <Router>
        <Header />
        <Toaster position="bottom-center" toastOptions={{ duration: 2000 }} />
        <ContactCrudContextProvider>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Login />} />
            <Route path="/Add" exact element={<AddContact />} />
            <Route path="/contactlist" element={<ContactList />} />
            <Route path="/edit" exact element={<EditContact />} />
            <Route path="/contact/:id" exact element={<ContactDetails />} />
          </Routes>
        </ContactCrudContextProvider>
      </Router>
    </div>
    </>
    
  );
}

export default App;
