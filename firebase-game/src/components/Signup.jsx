import { useState, useContext } from "react";

import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup } = useContext(AuthContext);
  const handleSignup = (e) => {
    e.preventDefault();
    signup(email, password);
  };

  return (
    <div>
      <hr />
      <h4>Create Account : Signup</h4>
      <form onSubmit={handleSignup}>
        <input
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          placeholder="Enter Your Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="email"
          placeholder="Enter Your Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
          type="text"
          placeholder="Enter Your Password"
        />
        <br />
        <input type="submit" />
      </form>

      <Link to="/">Already have an account? Login Now</Link>
    </div>
  );
}
