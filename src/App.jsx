import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topo from "./components/Topo";
import Home from "./components/Home";
import Catalogo from "./components/Catalogo";
import NotFound from "./components/NotFound";
import Principal from "./components/Principal";
import Rodape from "./components/Rodape";
import FrontEnd from "./components/Frontend"
import Programacao from "./components/Programacao"
import Design from "./components/Design"

import "./index.css";

function App() {
  return (
    <Router>
      <>
        <Topo/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frontend" element={<FrontEnd />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/design" element={<Design />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
