import "./App.css";
import React from "react";
import { Route, Routes } from 'react-router-dom';
import Display from "./components/Display.js";
import Input from "./components/Input.js";

function App() {
  return (
    <div className="container mt-3">
      <Routes>
          <Route path="/" element={<Input/>} />
          <Route path="/display" element={<Display/>} />
      </Routes>
    </div>
  );
}




export default App;
