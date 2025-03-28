import ContactCard from "./ContactCard";
import { useContext } from "react";
import { ChantactAppContext } from "../ContactAppContext";
export default function Contacts() {
  const { contacts } = useContext(ChantactAppContext);
  return (
    <div>
      <h1>Your Available Contacts</h1>
      {contacts.map((item, index) => (
        <ContactCard
          name={item.contactName}
          phone={item.phoneNumber}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
}
