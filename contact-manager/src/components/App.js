import React from "react";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import EditContact from "./EditContact";
import ContactDetails from "./ContactDetails";
import { ContactCrudContextProvider } from "../context/ContactsCrudContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactCrudContextProvider>
          <Routes>
            <Route path="/Add" exact element={<AddContact />} />
            <Route path="/" element={<ContactList />} />
            <Route path="/edit" exact element={<EditContact />} />
            <Route path="/contact/:id" exact element={<ContactDetails />} />
          </Routes>
        </ContactCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
