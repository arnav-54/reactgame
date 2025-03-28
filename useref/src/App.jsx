import "./App.css";
import { useRef } from "react";

function App() {
  const buttonRef = useRef();
  const hiRef = useRef();
  const hi = () => {
    alert("HI");
    buttonRef.current.click();
  };
  const hello = () => {
    alert("Hello");
    hiRef.current.click();
  };

  return (
    <div>
      <h1>UseRef</h1>
      <button ref={buttonRef} onClick={hello}>
        Hello
      </button>
      <button ref={hiRef} onClick={hi}>
        HI
      </button>
    </div>
  );
}

export default App;
