import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/in/:userid/posts/:postid" element={<ProfileCard />} />
      </Routes>
      <

      <h3>CommitToCode And Subscribe to Channel </h3>
    </div>
  );
}

export default App;
