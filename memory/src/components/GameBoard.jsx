import GameCard from "./GameCard";
import { GameContext } from "../GameContext";
import { useContext } from "react";

export default function GameBoard() {
  const { images, score } = useContext(GameContext);
  return (
    <div>
      <h1>Memory Game !</h1>
      <p>Score: {score}</p>
      <div className="box">
        {images.map((item, index) => (
          <GameCard
            image={item.image}
            visible={item.visible}
            name={item.name}
            key={index}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
