import { useState } from "react";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Oggy } from "./components/Oggy";
import { Shincha } from "./components/Shichan";
import { Doremon } from "./components/Doremon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <div style={{ display: "flex" }}>
        <Oggy />
        <Shincha />
        <Doremon />
      </div>

      <Footer />
    </div>
  );
}

export default App;
