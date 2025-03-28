import "./App.css";

import { GameContext } from "./GameContext";
import GameBoard from "./components/GameBoard";
import { useEffect, useState } from "react";
import useRandomImage from "./useRandomImage";
function App() {
  const [images, setImages] = useRandomImage();
  const [score, setScore] = useState(0);
  const [first, setFirst] = useState(-1);
  const [second, setSecond] = useState(-1);

  function flipImage(index) {
    if (second != -1) {
      alert("Don't Cheat");
      return;
    }
    setImages((values) => {
      const temp = [...values];
      temp[index].visible = true;

      return temp;
    });

    if (first == -1) {
      setFirst(index);
    } else {
      setSecond(index);
    }
  }

  useEffect(() => {
    if (second == -1) return;

    // check if first and secodn are same
    if (images[first].name == images[second].name) {
      setScore(score + 10);
      setFirst(-1);
      setSecond(-1);
    } else {
      // if they don't match then close of of them after 1 sec

      setTimeout(() => {
        setImages((values) => {
          const temp = [...values];
          temp[first].visible = false;
          temp[second].visible = false;
          // firs second clear
          setFirst(-1);
          setSecond(-1);
          return temp;
        });
      }, 1000);
    }
  }, [second]);

  return (
    <GameContext.Provider value={{ images, flipImage, score }}>
      <div>
        <GameBoard />
      </div>
    </GameContext.Provider>
  );
}

export default App;
