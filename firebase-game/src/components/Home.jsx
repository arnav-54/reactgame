import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import Board from "./Board";
import { GameContext } from "../GameContext";
export default function Home() {
  const { user, logout } = useContext(AuthContext);
  const { resetGame } = useContext(GameContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user == null || !auth.currentUser) {
      // redirect to login page
      navigate("/");
    }
  }, []);

  return (
    <div>
      {auth.currentUser ? (
        <div>
          <h3>Welcome in Tic Tac Toe</h3>
          <button onClick={logout}>Logout</button>
          <button onClick={resetGame}>Reset Game</button>
          <Link to="/real-time-database-tutorial">
            Move to Firebase Realtime Database Testing File
          </Link>
          <Board />
        </div>
      ) : (
        <h1>Rdirecting to login page</h1>
      )}
    </div>
  );
}
