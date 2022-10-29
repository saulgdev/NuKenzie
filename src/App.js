import React from "react";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [login, setLogin] = useState(true);

  return (
    <>{login ? <Home login={setLogin} /> : <Dashboard logout={setLogin} />}</>
  );
}

export default App;
