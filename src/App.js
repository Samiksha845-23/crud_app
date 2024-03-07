import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Create from "./Components/Create";
import Read from "./Components/Read";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/read" element={<Read />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
