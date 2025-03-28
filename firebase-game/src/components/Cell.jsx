import { useContext } from "react";
import { GameContext } from "../GameContext";

export default function Cell({ value, index }) {
  const { changeBoard } = useContext(GameContext);

  return (
    <div onClick={() => changeBoard(index)} className="cell">
      <h3>{value}</h3>
    </div>
  );
}
