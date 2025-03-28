import { useState, useContext } from "react";
import { ChantactAppContext } from "../ContactAppContext";
export default function AddContact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const { addContact } = useContext(ChantactAppContext);
  return (
    <div className="addcontact">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addContact(name, phone);
        }}
      >
        <input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          placeholder="Enter Name"
        />
        <br />
        <input
          value={phone}
          onChange={(e) => setPhone(e.currentTarget.value)}
          type="number"
          placeholder="Enter Phone Number"
        />
        <br />

        <input type="submit" value="Add Contact" />
      </form>
    </div>
  );
}
