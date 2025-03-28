import { createContext, useEffect, useState } from "react";

export const GameContext = createContext(null);
import { onValue, ref, set } from "firebase/database";
import { db } from "./firebase";
export default function GameContextPrvoider({ children }) {
  const [gameState, setGameState] = useState([
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
    "-",
  ]);

  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");
  function changeBoard(index) {
    // if cell is empty then only do the whole work
    if (gameState[index] != "-") {
      alert("Don't Cheat");
      return;
    }

    // if someone is already winner then also don't paly
    if (winner != "") {
      alert("Game is Finsihed");
      return;
    }
    // update board
    setGameState((curr) => {
      let copy = [...curr];
      copy[index] = player;

      return copy;
    });

    // flip turn
    if (player == "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
  }

  function checkWins(playerToCheck) {
    // first row
    if (
      gameState[0] == playerToCheck &&
      gameState[1] == playerToCheck &&
      gameState[2] == playerToCheck
    )
      return true;
    // second row
    if (
      gameState[3] == playerToCheck &&
      gameState[4] == playerToCheck &&
      gameState[5] == playerToCheck
    )
      return true;
    // third row
    if (
      gameState[6] == playerToCheck &&
      gameState[7] == playerToCheck &&
      gameState[8] == playerToCheck
    )
      return true;
    // firt col
    if (
      gameState[0] == playerToCheck &&
      gameState[3] == playerToCheck &&
      gameState[6] == playerToCheck
    )
      return true;
    // second col
    if (
      gameState[1] == playerToCheck &&
      gameState[4] == playerToCheck &&
      gameState[7] == playerToCheck
    )
      return true;
    // third col
    if (
      gameState[2] == playerToCheck &&
      gameState[5] == playerToCheck &&
      gameState[8] == playerToCheck
    )
      return true;

    // first diagonal
    if (
      gameState[0] == playerToCheck &&
      gameState[4] == playerToCheck &&
      gameState[8] == playerToCheck
    )
      return true;
    // second diagonal
    if (
      gameState[2] == playerToCheck &&
      gameState[4] == playerToCheck &&
      gameState[6] == playerToCheck
    )
      return true;

    return false;
  }

  useEffect(() => {
    let xWin = checkWins("X");
    let oWin = checkWins("O");
    if (xWin == true) {
      setWinner("X");
    }
    if (oWin == true) {
      setWinner("O");
    }

    // update in firebase
    const boardRef = ref(db, "board");
    set(boardRef, JSON.stringify(gameState));
  }, [gameState]);

  function resetGame() {
    setGameState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
    setPlayer("X");
    setWinner("");
  }

  function setListner() {
    // 1. Board Array
    const gameRef = ref(db, "board");
    onValue(gameRef, (snapshot) => {
      if (snapshot.exists()) {
        const newBoard = JSON.parse(snapshot.val());
        setGameState(newBoard);
      }
    });
    // 2. Second Listener for Turn
    const turnRef = ref(db, "turn");
    onValue(turnRef, (snapshot) => {
      if (snapshot.exists()) {
        setPlayer(snapshot.val());
      }
    });
  }

  useEffect(() => {
    setListner();
  }, []);

  useEffect(() => {
    // update firebase
    const turnRef = ref(db, "turn");
    set(turnRef, player);
  }, [player]);

  return (
    <div>
      <GameContext.Provider
        value={{ gameState, changeBoard, winner, player, resetGame }}
      >
        {children}
      </GameContext.Provider>
    </div>
  );
}
