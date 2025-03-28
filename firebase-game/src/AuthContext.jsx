import { createContext, useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";

import { auth } from "./firebase";
export const AuthContext = createContext(null);
import { useNavigate } from "react-router-dom";

export default function AuthContextProviderMain({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user;

        if (user.emailVerified == false) {
          alert("Please Verify your account in order to use app");
        } else {
          // 1. store details in user state
          setUser({ email: user.email, name: user.displayName });
          // 2. Store the user in localStorage
          localStorage.setItem(
            "user",
            JSON.stringify({ email: user.email, name: user.displayName })
          );
          // 3. Redirect the user in Home apge
          navigate("/home");
        }
      })
      .catch((err) => alert(err.message));
  };

  const signup = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        const user = response.user;

        sendEmailVerification(user, {
          url: "http://localhost:5173/",
        }).then(() =>
          alert("Please activate your account by the link sent on email")
        );
      })
      .catch((err) => alert(err.message));
  };

  const forgetPassword = (email) => {
    sendPasswordResetEmail(auth, email, {
      url: "http://localhost:5173/",
    })
      .then(() => alert("Forget Password link has been sent on provided email"))
      .catch((err) => alert(err.message));
  };

  // check if user exits in localstore it means user is alredy logged in
  useEffect(() => {
    if (localStorage.getItem("user") != null) {
      // 1. Update State
      setUser(JSON.parse(localStorage.getItem("user")));
      // 2. redirect to home
      navigate("/home");
    }
  }, []);

  const logout = () => {
    signOut(auth);
    setUser(null);
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{ user, login, signup, forgetPassword, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
