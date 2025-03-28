import { useContext } from "react";
import { GameContext } from "../GameContext";
import Cell from "./Cell";

export default function Board() {
  const { gameState, player, winner } = useContext(GameContext);

  return (
    <div>
      <p>Turn : {player}</p>
      {winner != "" && <p>Winner is : {winner}</p>}
      <div className="board">
        {gameState.map((item, index) => (
          <Cell key={index} index={index} value={item} />
        ))}
      </div>
    </div>
  );
}
