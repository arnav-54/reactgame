import { useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import Contacts from "./components/Contacts";

import { ChantactAppContext } from "./ContactAppContext";
function App() {
  const [contacts, setContacts] = useState([]);

  function addContact(name, phone) {
    const newContact = {
      contactName: name,
      phoneNumber: phone,
    };

    setContacts([...contacts, newContact]);
    alert("contact Added");
  }

  function deleteContact(index) {
    let newContacts = [];
    for (let i = 0; i < contacts.length; i++) {
      if (i != index) newContacts.push(contacts[i]);
    }
    setContacts(newContacts);
  }

  console.log(contacts);
  return (
    <ChantactAppContext.Provider
      value={{ addContact, deleteContact, contacts }}
    >
      <div className="main">
        <div>
          <h1>Your Contact Book</h1>
          <AddContact />
          <Contacts />
        </div>
      </div>
    </ChantactAppContext.Provider>
  );
}

export default App;
