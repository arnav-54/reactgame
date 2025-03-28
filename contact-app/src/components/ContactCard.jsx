import { useContext } from "react";
import { ChantactAppContext } from "../ContactAppContext";
export default function ContactCard({ name, phone, index }) {
  const { deleteContact } = useContext(ChantactAppContext);
  return (
    <div className="contact-card">
      <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" />
      <p>{name}</p>
      <p>{phone}</p>
      <button onClick={() => deleteContact(index)}>Delete</button>
    </div>
  );
}
