import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(-1);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount2(count2 - 1);
  }

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  useEffect(() => {
    console.log("Hello");
  }, [count2]);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        Welcome in CommitToCode {count} {count2}
      </h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;
