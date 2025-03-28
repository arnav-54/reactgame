import "./App.css";
import { useState } from "react";
function App() {
  const [color1, setColor1] = useState("red");
  const [color2, setColor2] = useState("green");
  const [color3, setColor3] = useState("yellow");

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Game World</h1>
      <input onChange={(e) => setColor1(e.currentTarget.value)} type="color" />
      <input onChange={(e) => setColor2(e.currentTarget.value)} type="color" />
      <input onChange={(e) => setColor3(e.currentTarget.value)} type="color" />

      <div className="flex">
        <div style={{ backgroundColor: color1 }} className="box"></div>
        <div style={{ backgroundColor: color2 }} className="box"></div>
        <div style={{ backgroundColor: color3 }} className="box"></div>
      </div>
    </div>
  );
}

export default App;
