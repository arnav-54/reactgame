import { useState } from "react";

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthContext";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div>
      <hr />
      <h4>Login To Your Account</h4>
      <form onSubmit={handleLogin}>
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

      <Link to="/signup">Don't have an account ? Signup Now</Link>
      <br />
      <Link to="/forget-password">Forget Password ?</Link>
    </div>
  );
}
