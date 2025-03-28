import { useState } from "react";

export default function useAdvanceState(initialValue) {
  const [a, setA] = useState(initialValue);

  function increase() {
    setA(a + initialValue);
  }

  return [a, increase];
}
