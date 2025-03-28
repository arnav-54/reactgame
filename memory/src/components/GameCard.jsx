import { useContext } from "react";
import { GameContext } from "../GameContext";

export default function GameCard({ name, image, visible, index }) {
  const { flipImage } = useContext(GameContext);

  return (
    <div className="imgbox" onClick={() => flipImage(index)}>
      {visible == true ? (
        <img src={image} />
      ) : (
        <img src="https://img.freepik.com/premium-vector/monkey-face-with-hands-covering-eyes-eyes_778550-998.jpg" />
      )}
    </div>
  );
}
