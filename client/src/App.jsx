import React from 'react';
import "./App.css"
import './index.css'
import {Landing, About, Projects} from "./components";
import { Routes, Route } from "react-router-dom";


function HomePage() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
