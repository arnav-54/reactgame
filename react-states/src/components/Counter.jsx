import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    console.log("Increased", count);
  }

  function decrease() {
    setCount(count - 1);
    console.log("Decreased", count);
  }

  return (
    <div>
      <h1>Hey, Your Count is {count} </h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
