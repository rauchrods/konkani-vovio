import "./App.css";
import { Routes, Route } from "react-router-dom";
import Vovio from "./components/Vovio";
import Laudate from "./components/Laudate";
import { useState } from "react";
import Navbar from "./components/Navbar";
function App() {
  const [mode, setMode] = useState("light");

  function setModeHandler() {
    setMode((prevstate) => {
      if (prevstate === "light") {
        return "dark";
      }
      return "light";
    });
  }

  return (
    <Routes>
      <Route element={<Navbar mode={mode} setModeHandler={setModeHandler} />}>
        <Route path="/" element={<Vovio mode={mode} />} />
        <Route path="/laudate" element={<Laudate mode={mode} />} />
      </Route>
    </Routes>
  );
}

export default App;
