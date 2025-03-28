import "./App.css";

import useAdvanceState from "./useAdvanceState";
function App() {
  const [myValue, setMyValue] = useAdvanceState(5);

  const [p, setP] = useAdvanceState(3);

  return (
    <div>
      <h1>Subscribe {myValue}</h1>
      <button onClick={() => setMyValue()}>Subscribe</button>

      <h1>Subscribe {p}</h1>
      <button onClick={() => setP()}>Subscribe</button>
    </div>
  );
}

export default App;
