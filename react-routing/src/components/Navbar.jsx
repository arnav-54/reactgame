import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1>React Router</h1>

      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
