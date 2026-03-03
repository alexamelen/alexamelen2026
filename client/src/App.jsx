import React from 'react';
import "./App.css"
import './index.css'
import {Landing, About, Projects} from "./components";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return <>
    <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
    </Routes>
    </>
};

export default App


